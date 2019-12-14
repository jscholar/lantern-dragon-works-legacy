import React from 'react';
import PropTypes from 'prop-types';

import NoPage from '../routes/NoPage/NoPage'

import Navbar from './navigation/Navbar';

import classes from './Layout.module.scss';

class Layout extends React.Component {

  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className={classes.Layout}>
        <header>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
