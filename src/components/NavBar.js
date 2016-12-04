import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { AppBar, Tabs, Tab } from 'material-ui';

const styles = {
  tab: {
    marginLeft: '20px',
    marginRight: '20px'
  }
}

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    browserHistory.push(target);
  }

  render() {
    return (
      <AppBar title="UFC API" showMenuIconButton={false}>
        <Tabs>
          <Tab label="Fighters" onClick={this.navigate.bind(null, '/fighters')} style={styles.tab} />
          <Tab label="Teams"  onClick={this.navigate.bind(null, '/teams')} style={styles.tab} />
          <Tab label="Events"  onClick={this.navigate.bind(null, '/events')} style={styles.tab} />
        </Tabs>
      </AppBar>
    )
  }
}
