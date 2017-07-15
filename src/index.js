import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('root')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    });
}
