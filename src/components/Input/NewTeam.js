import React, { Component } from 'react';

export default class NewTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      city: '',
      country: ''
    };

    this.inputChange = this.inputChange.bind(this);
    this.addNewTeam = this.addNewTeam.bind(this);
  }

  inputChange(e) {
    const key = e.target.dataset.statekey;
    const value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  addNewTeam() {
    console.log('NEW TEAM');
  }

  render() {
    return (
      <div>
        <h1>New Team</h1>
        <form onSubmit={this.addNewTeam}>
          <TextField
            hintText="Team Name"
            floatingLabelText="Tea Name"
            data-statekey="name"
            onChange={this.inputChange}
          />
          <br />
          <TextField
            hintText="City"
            floatingLabelText="City"
            data-statekey="city"
            onChange={this.inputChange}
          />
          <br />
          <TextField
            hintText="Country"
            floatingLabelText="Country"
            data-statekey="country"
            onChange={this.inputChange}
          />
          <br />
          <RaisedButton label="Add" style={styles.button} type="submit"/>
        </form>
      </div>
    )
  }
}
