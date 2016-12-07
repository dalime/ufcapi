import React, { Component } from 'react';

const styles = {
  splashBackground: {
    backgroundImage: 'url(http://bhcourier.com/wp-content/uploads/2016/07/081214-UFC-General-view-of-the-Octagon-J2-PI.vresize.1200.675.high_.33.jpg)',
    backgroundSize: 'cover',
    margin: '-20px',
    marginTop: '-50px',
    height: '700px'
  },
  splashText: {
    color: 'white',
    padding: '150px'
  },
  splashTitle: {
    fontSize: '85px'
  }
}

export default class Splash extends Component {
  render() {
    return (
      <div style={styles.splashBackground}>
        <div style={styles.splashText}>
          <h1 style={styles.splashTitle} className="text-center">UFC API</h1>
          <h3 className="text-center">All information on UFC fighters, teams, and events.</h3>
        </div>
      </div>
    )
  }
}
