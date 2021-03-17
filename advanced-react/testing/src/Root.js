import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from 'reducers'
import PropTypes from 'prop-types'
import {MemoryRouter} from 'react-router-dom'
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";


const Root = (props) => {

  const {initialState = {}, children, initialRoute = ['/']} = props
  const store = createStore(reducers, initialState, applyMiddleware(async, stateValidator))

  return (
    <MemoryRouter initialEntries={initialRoute}>
      <Provider store={store}>
        <React.StrictMode>
          {children}
        </React.StrictMode>
      </Provider>
    </MemoryRouter>
  )
}

Root.propTypes = {
  initialState: PropTypes.object
};

export default Root