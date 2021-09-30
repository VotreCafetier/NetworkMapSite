import './Footer.css';

import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().getFullYear()
        };
    }
    getDate() {
        let date = new Date().getFullYear();
        this.setState({
            date: date
        });
    }
    componentDidMount() {
        this.getDate();
    }
    render() {
        return (
            <footer>
                <span>Dany Gauthier {this.state.date} | This site is powered by React and Django</span>
            </footer>
        )
    }
}
