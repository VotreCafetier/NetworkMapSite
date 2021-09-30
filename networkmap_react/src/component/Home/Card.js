import './Card.css';
import React, { Component } from 'react';
import Details from './Details';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.id = 0;
    }
    handleClick = (id) => {
        const s = this.state;
        s.showComponent === true? this.setState({showComponent : false}): this.setState({showComponent : true});
        this.id = id || 0;
    }
    render() {
        const { card } = this.props;
        const cardList = card.map(c => {
            return (
                <div className="Card" key={c.id} onClick={() => this.handleClick(c.id)}>
                    <div>
                        <span></span>
                        <span></span>
                        <img src={c.img} alt={c.alt}/>
                        <h4>{c.title}</h4>
                        <p>{c.description}</p>
                    </div>
                </div>
            )
        })
        return (
            <>
            <CSSTransitionGroup 
            transitionName="Fade"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
            >
                {this.state.showComponent ?
                <Details id={this.id} info={card} onClose={()=>this.handleClick()}/>:null
                }
            </CSSTransitionGroup>
            <div id="card_holder">
                { cardList }
            </div>
            </>
        )
    }
}
