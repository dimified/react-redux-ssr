import React from 'react';
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
  const store = createStore(reducers);

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
