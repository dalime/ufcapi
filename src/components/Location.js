import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './NavBar';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
