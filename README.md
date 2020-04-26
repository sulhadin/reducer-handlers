# Reducer handlers
[![CircleCI](https://circleci.com/gh/sulhadin/reducer-handlers.svg?style=svg)](https://circleci.com/gh/sulhadin/reducer-handlers)
[![Coverage Status](https://codecov.io/gh/sulhadin/reducer-handlers/branch/master/graph/badge.svg)](https://codecov.io/gh/sulhadin/reducer-handlers)
[![npm version](https://badge.fury.io/js/reducer-handlers.svg)](https://badge.fury.io/js/reducer-handlers)

reducer-handlers contains Reducer and Action handlers.

## Installation
```bash
$ npm install --save reducer-handlers
```

##Usage
```javascript
import { generateUpdateStateHandler, generateReducer, dispatchAction } from 'reducer-handlers';
```

For a good practice of redux reducer implementation, you can organise your default states and action types as separate files.

````javascript
// defaultState.js

export const stateKeys = {
  someState: 'someState',
  someState2: 'someState2',
};

export const defaultState = {
  [stateKeys.someState]: '',
  [stateKeys.someState2]: {},
};
````

````javascript
// actionTypes.js

export const GET_SOME_STATE = 'SOME/GET_SOME_STATE';
export const GET_SOME_STATE2 = 'SOME/GET_SOME_STATE2';
````

## Reducer Handler Usage
After defining default states and action types, now you are ready to create your first `reducer.js`. 
Here I introduce you `generateUpdateStateHandler` and `generateReducer` reducer handlers.  `generateUpdateStateHandler`
updates your states whereas `generateReducer` gets among your `handlers` by action types.


```javascript
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
Here is a simple action implementation. For a quick introduction; `dispatchAction` creates and dispatches your new result.
```javascript
// getGetSomeAction.js

import { dispatchAction } from 'reducer-handlers';
import { GET_SOME_STATE } from './actionTypes';

export const getGetSomeAction = () => {
  return async dispatch => {
    //some code here.
    const result = '... //code returned from some code';
    return dispatchAction(dispatch)(GET_SOME_STATE, result);
  };
};
```

### License

MIT
