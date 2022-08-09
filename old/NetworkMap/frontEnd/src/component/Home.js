import React, { Component } from 'react';
import Card from './Home/Card';
import axios from "axios";
import './Home.css';
import { API_URL } from '../constants';

class Home extends Component{
    state = {
      cards : []
    }

    getCards = () => {
      axios.get(API_URL,{
        headers: {
          'Authorization': `JWT ${this.props.token}`
        }
      })
      .then((res) => {
        this.setState({ cards: res.data });
        });
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