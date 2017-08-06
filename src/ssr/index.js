import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import App from '../app/components/App';

/**
 * Server side rendering
 * Takes the application and renders the HTML inside the template.
 * @param {object} req Request object
 * @param {object} res Response object
 */
export default function render(req, res) {
  const app = renderToString(<App />);
  res.send(template({
    body: app,
    title: 'holly',
  }));
}
