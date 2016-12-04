import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import NavBar from './NavBar';

const muiTheme = getMuiTheme(darkBaseTheme);

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar />
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
