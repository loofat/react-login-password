import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducers } from '../reducers'

export const stores = createStore(
  combineReducers({
    state: reducers
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
