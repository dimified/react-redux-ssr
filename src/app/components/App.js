import React from 'react';
import style from './App.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    status: state.app.status
  };
};

const App = ({ status }) => (
    <div className={ style.app }>
        <h2>Hello Goofi, you are { status }</h2>
    </div>
);

export default connect(mapStateToProps)(App);
