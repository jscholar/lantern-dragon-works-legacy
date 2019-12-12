import React from 'react';
import PropTypes from 'prop-types';
import Aux from './../components/hoc/Auxilliary.jsx';

import classes from './Layout.module.scss';
class Layout extends React.Component {

  static propTypes = {

  };

  render() {
    return (
      <div className={classes.Layout}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
