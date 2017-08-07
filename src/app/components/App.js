import React from 'react';
import style from './App.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.app.isLoggedIn
  };
};

const App = ({ isLoggedIn }) => (
    <div className={ style.app }>
        <h2>Hello Goofi, you are</h2>
        { isLoggedIn ? 'loggedin' : 'loggedout' }
    </div>
);

export default connect(mapStateToProps)(App);
