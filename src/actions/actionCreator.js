/**
 * Make Action Method - reused by all action dispatchers
 * @param {*} actionType
 */
export default actionType => (payload = '') => ({
  type: actionType,
  payload
});
