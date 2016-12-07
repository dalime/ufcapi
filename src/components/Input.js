import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
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
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Fighter" />
          <MenuItem value={2} primaryText="Team" />
          <MenuItem value={3} primaryText="Event" />
        </DropDownMenu>
        <br />
      </div>
    );
  }
}
