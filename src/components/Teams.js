import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Name",
      location: "Location",
      picture: "https://static1.squarespace.com/static/542f0093e4b05beebf44b55b/5446b65de4b084b6fb779dda/5446b673e4b084b6fb779e36/1413920384271/IMG_2100_Crop.jpg?format=750w",
      description: `Pooping rainbow while flying in a toasted bread costume in space chase imaginary bugs put butt in owner's face sweet beast, so cat slap dog in face yet chase after silly colored fish toys around the house. Rub whiskers on bare skin act innocent. Sit and stare eat and than sleep on your face, put toy mouse in food bowl run out of litter box at full speed destroy the blinds. Attack dog, run away and pretend to be victim. Scamper meow to be let in, but hide at bottom of staircase to trip human or rub face on owner nap all day give attitude stare at the wall, play with food and get confused by dust. Scream at teh bath. Stare at the wall, play with food and get confused by dust lay on arms while you're using the keyboard, so rub whiskers on bare skin act innocent scratch at the door then walk away so chase imaginary bugs. Make meme, make cute face jump around on couch, meow constantly until given food, or drink water out of the faucet for eat all the power cords jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed so jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water and flee in terror at cucumber discovered on floor. `
    }
  }

  componentDidMount() {
    let { name, location, picture, description } = this.state;
    this.setState({
      name, location, picture, description
    });
  }

  render() {
    let { name, location, picture, description } = this.state;

    if (name && location && picture && description) {
      return (
        <div>
        <Card>
          <CardMedia
            overlay={<CardTitle title={name} subtitle={location} />}
          >
            <img src={picture} />
          </CardMedia>
          <CardText>
            {description}
          </CardText>
          <CardActions>
            <FlatButton label="fighters" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
