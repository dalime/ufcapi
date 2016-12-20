import React, { Component } from 'react';

export default class NewFighter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      weightClass: '',
      team: '',
      events: '',
      nextEvent: ''
    };

    this.inputChange = this.inputChange.bind(this);
    this.addNewFighter = this.addNewFighter.bind(this);
  }

  inputChange(e) {
    const key = e.target.dataset.statekey;
    const value = e.target.value;

    this.setState({
      [key]: value
    });
  };

  addNewFighter() {
    console.log('ADDED NEW');
  }

  render() {
    return(
      <div>
        <h1>New Fighter</h1>
        <form onSubmit={this.addNewFighter}>
          <TextField
            hintText="Fighter Name"
            floatingLabelText="Fighter Name"
            data-statekey="name"
            onChange={this.inputChange}
          />
          <br />
          <TextField
            hintText="Weight Class"
            floatingLabelText="Weight Class"
            data-statekey="weightClass"
            onChange={this.inputChange}
          />
          <br />
          <TextField
            hintText="Team"
            floatingLabelText="Team"
            data-statekey="team"
            onChange={this.inputChange}
          />
          <br />
          <TextField
            hintText="Events"
            floatingLabelText="Events"
            data-statekey="events"
            onChange={this.inputChange}
          />
          <TextField
            hintText="Next Event"
            floatingLabelText="Next Event"
            data-statekey="nextEvent"
            onChange={this.inputChange}
          />
          <br />
          <RaisedButton label="Add" style={styles.button} type="submit"/>
        </form>
      </div>
    )
  }
}
