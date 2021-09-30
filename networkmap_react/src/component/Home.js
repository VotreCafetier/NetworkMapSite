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
          alt: 'There is no image'
        },
        {id: 2, title: "Router",description: "RT-AC5300",img : "",alt : "There is no image"},
        {id: 3, title: "Router",description: "Router",img : "",alt : "There is no image"}
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