import moment from 'moment';

import { isStarted } from '../selectors/statusSelector.js';
import getFeatureFlag from '../../../importer/src/utils/featureFlag';

import type { Phase } from '../types/phase';
import type { Session } from '../types/session';

let currentSessionCache = null;

export function getCurrentSession(phases: Array<?Phase>): Session{
  if (!phases?.length > 0) return;
  const nowOverride = getFeatureFlag('nowOverride');
  const now = nowOverride ? new Date(nowOverride) : new Date();

  if(currentSessionCache && now > currentSessionCache.start && now < currentSessionCache.end){
    phases.forEach(phase => phase.start = new Date(phase.phaseDateAndTime));
    currentSessionCache.phases = phases.filter(phase => phase.start > currentSessionCache.start && phase.start < currentSessionCache.end);
    currentSessionCache.phases.sort((a, b) => a.start - b.start);
    currentSessionCache.leakingPhases = getLeakingPhases(phases, currentSessionCache.phases);
    currentSessionCache.leakingPhases.sort((a, b) => a.start - b.start);
    return currentSessionCache;
  }

  //'2017-08-05T21:45:00.000Z'
  //const now = new Date('2017-08-05T06:00:00.000Z');
  // Add proper dates to phases
  phases.forEach(phase => phase.start = new Date(phase.phaseDateAndTime));

  phases.sort((a, b) => a.start - b.start);
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date(now);
  todayEnd.setHours(23, 59, 59, 999);
  const todaysPhases = phases.filter(phase => phase.start > todayStart && phase.start < todayEnd);
  const todaysSessionPhasesMap = todaysPhases.reduce((a, c) => {
    if(!a[c.phaseSessionName]){
      a[c.phaseSessionName] = {
        order: c.phaseSessionOrder,
        phases: []
      };
    }
    a[c.phaseSessionName].phases.push(c);
    return a;
  }, {});
  const todaysSessions = Object.entries(todaysSessionPhasesMap)
    .map(([sessionName, session]) => {
      return {
        name: sessionName,
        phases: session.phases,
        order: session.order
      }
    });
  todaysSessions.sort((a, b) => {
    return a.order - b.order
  });


  // work out each sessions start
  todaysSessions.forEach((session, i) => {
    session.start = i === 0 ? todayStart : session.phases[0].start
  });

  // work out each sessions end
  todaysSessions.forEach((session, i) => {
    if(i === todaysSessions.length - 1){
      session.end = todayEnd;
      return;
    }

    const nextSession = todaysSessions[i + 1];
    const lastPhaseOfSession = session.phases[session.phases.length - 1];
    const gapTicks = nextSession.start - lastPhaseOfSession.start;
    session.end = new Date(lastPhaseOfSession.start.getTime() + Math.floor(gapTicks / 2));
  });

  const currentSession = todaysSessions.find(session => now >= session.start && now <= session.end);

  if(!currentSession) return null;

  currentSessionCache = {
    start: currentSession.start,
    end: currentSession.end,
    phases: currentSession.phases,
    leakingPhases: getLeakingPhases(phases, currentSession.phases)
  };

  return currentSessionCache;
}

function getLeakingPhases(phases, currentSessionPhases){
  const currentSessionPhaseIdMap = currentSessionPhases.reduce((a, c) => {
    a[c.id] = true;
    return a;
  }, {});

  return phases.filter(phase => !currentSessionPhaseIdMap[phase.id] && isStarted(phase.status));
}
