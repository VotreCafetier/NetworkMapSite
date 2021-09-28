import React, { Component } from 'react';
import Card from './Home/Card';

class Home extends Component{
    render() {
        return (
          <section>
              <h2>Home</h2>
              <Card title="Pihole" description="Powerfull dns sinkhole" img="" alt="There is no image"/>
          </section>
        );
    }
}

export default Home;