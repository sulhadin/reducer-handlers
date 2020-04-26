# Reducer handlers

reducer-handlers contains Reducer and Action handlers.

## Reducer Handler Usage

``` javascript
// reducer.js

import { generateUpdateStateHandler, generateReducer } from 'reducer-handlers';
import { stateKeys, defaultState } from './defaultState';
import { GET_SOME_STATE, GET_SOME_STATE2 } from './actionTypes';

const handlers = {};
handlers[GET_SOME_STATE] = generateUpdateStateHandler(stateKeys.someState);
handlers[GET_SOME_STATE2] = generateUpdateStateHandler(stateKeys.someState2);

export default generateReducer(defaultState, handlers);
```

## Action Handler Usage
``` javascript
// getGetSomeAction.js

import { dispatchAction } from 'reducer-handlers';
import { GET_SOME_STATE } from './actionTypes';

export const getGetSomeAction = () => {
  return async dispatch => {
    //some code here.
    const result = ... //code returned from some code;
    return dispatchAction(dispatch)(GET_SOME_STATE, result);
  };
};
```

## Quick Start

1. Install using npm, yarn, or whatever package manager you use:

   ``` bash
   npm install reducer-handlers
   yarn add reducer-handlers
   ```
