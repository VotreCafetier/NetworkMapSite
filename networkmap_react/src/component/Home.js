import React, { Component } from 'react';
import Card from './Home/Card';
import './Home.css';

import {
  PiholeBackground
} from '../img'

class Home extends Component{
    state = {
      cards : [
        {
          id: 1,
          title: 'Pi-hole', 
          description: `General purpose network-wide ad-blocker that protects your network from ads.`,
          img: PiholeBackground,
          link: '192.168.0.105'
        },
        {
          id: 2,
          title: 'Router', 
          description: `RT-AC5300`,
          img: '',
          link: '192.168.0.1'
        }
      ]
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