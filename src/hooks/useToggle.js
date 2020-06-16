// @flow
import { useState } from 'react';

const useToggle = (initial = false) => {
  const [isShowing, setIsShowing] = useState(initial);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  };
};

export default useToggle;
