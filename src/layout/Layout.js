import React from 'react';
import PropTypes from 'prop-types';

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
          <Navbar />
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
