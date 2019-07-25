import React, { Component } from 'react';
import axios from 'axios';

export default class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighter: ['tmp']
    };
  }

  fetchFighter = async () => {
    try {
      const result = await axios.get(
        'https://floating-hamlet-32385.herokuapp.com/fighterInfo'
      );
      this.setState({ fighter: result.data });
      console.log('before the map');
      this.state.fighter.map(key => {
        console.log('value of key ', key);
      });
      console.log('after the map');
    } catch (e) {
      console.log('Failed Private.jsx fetchFighter ', e);
    }
  };

  componentDidMount() {
    this.fetchFighter();
  }

  render() {
    const fighters = this.state.fighter.map(fighter => (
      <li key="1">
        {fighter.name} {fighter.birth}
      </li>
    ));

    return (
      <div>
        <h1>Private access</h1>
        <ul>{fighters}</ul>
      </div>
    );
  }
}
