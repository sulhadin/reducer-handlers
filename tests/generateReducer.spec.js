import { generateReducer, generateUpdateStateHandler } from '../src';
import getAction from '../src/getAction';
import { stateKeys, defaultState } from './defaultState';

const GET_SOME_STATE = 'SOME/GET_SOME_STATE';
const GET_SOME_STATE_2 = 'SOME/GET_SOME_STATE_2';

describe('generateReducer test', () => {
  const handlers = {};

  beforeEach(() => {
    handlers[GET_SOME_STATE] = generateUpdateStateHandler(stateKeys.someState);
  });

  test('generateReducer should return a function', () => {
    const actionHandler = generateReducer(defaultState, handlers);

    expect(actionHandler).toBeInstanceOf(Function);
  });

  test('Function that returned from generateReducer should return the updated state', () => {
    const actionHandler = generateReducer(defaultState, handlers);

    const payload = 'New some state';
    const action = getAction(GET_SOME_STATE, payload);
    const states = actionHandler(defaultState, action);

    expect(states.someState).toEqual(payload);
  });

  test('Function that returned from generateReducer should return the defaultState', () => {
    const actionHandler = generateReducer(defaultState, handlers);

    const payload = 'New some state';
    const action = getAction(GET_SOME_STATE_2, payload);
    const states = actionHandler(defaultState, action);

    expect(states.someState).toEqual(defaultState[stateKeys.someState]);
  });

  test('Function that returned from generateReducer should return the defaultState with undefined parameter', () => {
    const actionHandler = generateReducer(defaultState, handlers);

    const payload = 'New some state';
    const action = getAction(GET_SOME_STATE, payload);
    const states = actionHandler(undefined, action);

    expect(states.someState).toEqual(payload);
  });
});
