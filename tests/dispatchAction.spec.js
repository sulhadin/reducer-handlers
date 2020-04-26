import { dispatchAction } from '../src';
import getAction from '../src/getAction';

jest.mock('../src/getAction');

const payload = 'some payload';
const GET_SOME_STATE = 'SOME/SOME_STATE';
const actionType = { type: GET_SOME_STATE, payload };

getAction.mockImplementation(() => actionType);

describe('dispatchAction test', () => {
  test('dispatchAction call should return a function', () => {
    const action = dispatchAction();
    expect(action).toBeInstanceOf(Function);
  });

  test('Returned value of the function that returned from dispatchAction call should equal to actionType', () => {
    const dispatchFn = jest.fn((actionParam) => actionParam);
    const action = dispatchAction(dispatchFn);

    const dispatch = action(GET_SOME_STATE, payload);

    expect(dispatch).toEqual(actionType);
  });
});
