import React from 'react';
import qs from 'qs';
import { renderToString } from 'react-dom/server';
import template from './template';
import App from '../app/components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../app/reducers';

/**
 * Server side rendering
 * Takes the application and renders the HTML inside the template.
 * @param {object} req Request object
 * @param {object} res Response object
 */
export default function render(req, res) {
  // Read the counter from the request, if provided
  const params = qs.parse(req.query);
  const status = params.status;

  // Compile an initial state
  let preloadedState = { app: { status } };

  const store = createStore(reducers, preloadedState);

  const app = renderToString(
    <Provider store={ store }>
      <App />
    </Provider>
  );

  const state = store.getState();

  res.send(template({
    body: app,
    title: 'holly',
    state
  }));
}
