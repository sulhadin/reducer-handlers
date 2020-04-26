import { generateUpdateStateHandler } from '../src';
import { stateKeys, defaultState } from './defaultState';

describe('generateUpdateStateHandler test', () => {
  test('generateUpdateStateHandler call should return a function', () => {
    const stateHandler = generateUpdateStateHandler(stateKeys.someState);
    expect(stateHandler).toBeInstanceOf(Function);
  });

  test('Function that returned from generateUpdateStateHandler should return the updated state', () => {
    const stateHandler = generateUpdateStateHandler(stateKeys.someState);

    const action = { payload: 'New some state' };
    const states = stateHandler(defaultState, action);

    expect(states.someState).toEqual(action.payload);
  });
});
