const getAction = (actionType, payload) => {
  return {
    type: actionType,
    payload,
  };
};

export default getAction;
