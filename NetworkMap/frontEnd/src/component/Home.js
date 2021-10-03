import React, { Component } from 'react';
import Card from './Home/Card';
import axios from "axios";
import './Home.css';
import { API_URL } from '../constants';

import {
  PiholeBackground
} from '../img'

class Home extends Component{
    state = {
      cards : []
    }

    getCards = () => {
      console.log(
        API_URL,
        axios.get(API_URL).then(res => this.setState({ cards: res.data }))
      );
    };
    
    componentDidMount() {
      this.getCards();
    }

    render() {
        return (
          <section>
              <h2>Home</h2>
              <Card card={this.state.cards}/>
          </section>
        );
    }
}

export default Home;