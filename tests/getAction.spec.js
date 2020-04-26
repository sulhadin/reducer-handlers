import getAction from '../src/getAction';

const payload = 'some payload';
const GET_SOME_STATE = 'SOME/SOME_STATE';
const actionType = { type: GET_SOME_STATE, payload };

describe('getAction test', () => {
  test('getAction call should return actionType', () => {
    const action = getAction(GET_SOME_STATE, payload);

    expect(action).toEqual(actionType);
  });
});
