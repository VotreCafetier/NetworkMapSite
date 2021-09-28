import React from 'react';
import './Card.css';

const Card = (props) =>{
    const { card } = props;
    const cardList = card.map(c => {
        return (
            <div className="Card" key={c.id}>
                <img src={c.img} alt={c.alt}/>
                <h4>{c.title}</h4>
                <p>{c.description}</p>
            </div>
        )
    })
    return (
        <div id="card_holder">
            { cardList }
        </div>
    )
}

export default Card
