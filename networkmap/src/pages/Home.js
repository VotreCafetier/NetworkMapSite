import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

  componentDidMount() {
    // fetch all the projects from api
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>Home</div>
    )
  }
}

export default Home