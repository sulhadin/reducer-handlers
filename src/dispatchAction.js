import getAction from './getAction';

const dispatchAction = (dispatch) => (actionType, payload) =>
  dispatch(getAction(actionType, payload));

export default dispatchAction;
