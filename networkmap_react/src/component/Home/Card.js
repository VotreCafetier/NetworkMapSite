import React, { Component } from 'react';
import './Card.css';

class Card extends Component{
    render(){
        const { title, description, img, alt } = this.props;
        return(
            <div class="Card">
                <img src={img} alt={alt}/>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        )
    }
        
}

export default Card
