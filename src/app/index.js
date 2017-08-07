import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Components
import App from './components/App';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(reducers, preloadedState);

// Initial rendering of application
const render = (Component) => {
  ReactDOM.render(
    <Provider store={ store }>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

// Render application
render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
