import React from 'react'
import './Details.css'

function Details(props) {
    const p = props.info[props.id-1];
    return (
        <div id="detail_view" onClick={props.onClose}>
            <div>
                <h1>{p.title}</h1>
                <p>{p.description}</p>
                <p>Link : <a href={'http://'+p.link}>{p.link}</a></p>
                <img src={p.img} alt={p.img+'_icon'}/>
            </div>
        </div>
    )
}

export default Details
