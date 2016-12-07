import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12
  }
}

export default class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      date: null,
      city: '',
      country: ''
    };

    this.inputChange = this.inputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewEvent = this.addNewEvent.bind(this);
  }

  inputChange(e) {
    const key = e.target.dataset.statekey;
    const value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  handleChange(event, date) {
    this.setState({date});
  };

  addNewEvent(e) {
    e.preventDefault();
    console.log ('this.state:', this.state);
  }

  render() {
    return (
      <div>
        <h1>New Event</h1>
        <form onSubmit={this.addNewEvent}>
          <TextField
            hintText="Event Name"
            floatingLabelText="Event Name"
            data-statekey="name"
            onChange={this.inputChange}
          />
          <br />
          <DatePicker
            hintText="Date"
            floatingLabelText="Date"
            value={this.state.date}
            onChange={this.handleChange}
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
