import React, { Component } from 'react';
import Card from './Home/Card';
import './Home.css';

class Home extends Component{
    state = {
      cards : [
        {
          id: 1,
          title: 'Pihole', 
          description: `Linux network-level advertisement and Internet tracker 
          blocking application which acts as a DNS sinkhole and optionally a DHCP server`,
          img: '',
          alt: 'There is no image'
        },
        {id: 2, title: "Router",description: "Router",img : "",alt : "There is no image"},
        {id: 3, title: "Router",description: "Router",img : "",alt : "There is no image"},
        {id: 4, title: "Router",description: "Router",img : "",alt : "There is no image"}
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