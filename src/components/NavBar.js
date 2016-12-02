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
          <Tab label="Fighters"/>
          <Tab label="Gyms" />
          <Tab label="Teams" />
        </Tabs>
      </AppBar>
    )
  }
}
