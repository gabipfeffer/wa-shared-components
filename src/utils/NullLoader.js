import { branch, renderNothing } from 'recompose';

export default (loading) => branch(loading, renderNothing);
