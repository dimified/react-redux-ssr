import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';

// Initial rendering of application
const render = (Component) => {
  ReactDOM.render(
    <Component />,
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
