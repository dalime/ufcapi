import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Fighters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fighterName: "Name",
      fighterClass: "Weight Class",
      fighterPicture: "https://i.ytimg.com/vi/G99Q2neoFoo/maxresdefault.jpg",
      fighterProfile: "Example text",
      teams: "Team Name",
      nextFight: "Next Fight"
    }
  }

  componentDidMount() {
    let { fighterName, fighterClass, fighterPicture, fighterProfile, teams, nextFight } = this.state;
    this.setState({
      fighterName, fighterClass, fighterPicture, fighterProfile, teams, nextFight
    });
  }

  render() {
    let { fighterName, fighterClass, fighterPicture, fighterProfile, teams, nextFight } = this.state;

    if (fighterName && fighterClass && fighterPicture && fighterProfile && teams && nextFight) {
      return (
        <div>
        <Card>
          <CardMedia
            overlay={<CardTitle title={fighterName} subtitle={fighterClass} />}
          >
            <img src={fighterPicture} />
          </CardMedia>
          <CardText>
            {fighterProfile}
          </CardText>
          <CardActions>
            <FlatButton label={teams} />
            <FlatButton label={nextFight} />
          </CardActions>
        </Card>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fighters);
