import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import NewFighter from './Input/NewFighter';
import NewTeam from './Input/NewTeam';
import NewEvent from './Input/NewEvent';

const styles = {
  addComponent: {
    marginTop: '100px',
    backgroundColor: 'black'
  }
};

export default class DropDownMenuSimpleExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    let { value } = this.state;
    let input;

    switch(value) {
      case 1:
        input = <NewFighter />
        break;
      case 2:
        input = <NewTeam />
        break;
      case 3:
        input = <NewEvent />
        break;
    }

    return (
      <div style={styles.addComponent}>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Fighter" />
          <MenuItem value={2} primaryText="Team" />
          <MenuItem value={3} primaryText="Event" />
        </DropDownMenu>
        <br />
        {input}
      </div>
    );
  }
}
