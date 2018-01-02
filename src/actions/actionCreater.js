export const actionCreator = (actionType) => {
    return function (payload='') {
      return {
        'type': actionType,
        'payload': payload
      };
    };
  };