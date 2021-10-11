import React, { Component } from 'react';
import Card from './Home/Card';
import axios from "axios";
import './Home.css';
import { API_URL } from '../constants';

class Home extends Component{
    state = {
      cards : [],
      isAuthentificated : false
    }

    getCards = () => {
        axios.get(API_URL).then(res => this.setState({ cards: res.data }));
        console.log(this.state);
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