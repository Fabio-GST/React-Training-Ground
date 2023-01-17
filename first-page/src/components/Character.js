import React, { Component } from 'react';
import axios from 'axios';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personagem:{}
    };
  }
  componentDidMount() {
    axios.get(`https://api.genshin.dev/characters/ayaka`)
    .then(res => {
      const Personagem = res.data;
      this.setState({Personagem})
    })
  }
  render() {
    return (
      <div>
        <p>Nome: {this.state.Personagem.name}</p>
        <p>title: {this.state.Personagem.title}</p>
        <p>vision: {this.state.Personagem.vision}</p>
        <p>weapon: {this.state.Personagem.weapon}</p>
        <p>nation: {this.state.Personagem.nation}</p>
      </div>
    );
  }
}

export default Character;