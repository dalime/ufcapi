import React, { Component } from 'react';

import NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
        </div>
      </MuiThemeProvider>
    )
  }
}
