import React, { Component } from 'react';

import { AppBar, Tabs, Tab } from 'material-ui';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <AppBar title="UFC API" showMenuIconButton={false}>
        <Tabs>
          <Tab label="Fighters" onClick={this.navigate}/>
          <Tab label="Gyms"  onClick={this.navigate}/>
          <Tab label="Teams"  onClick={this.navigate}/>
        </Tabs>
      </AppBar>
    )
  }
}
