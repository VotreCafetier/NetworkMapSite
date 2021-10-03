import React from 'react'
import './Details.css'

function Details(props) {
    const p = props.info[props.id];
    return (
        <div id="detail_view" onClick={props.onClose}>
            <div>
                <h1>{p.cTitle}</h1>
                <p>{p.cDescription}</p>
                <p>Link : <a href={'http://'+p.cAddress}>{p.cAddress}</a></p>
                <img src={p.cImage} alt={p.cImage+'_icon'}/>
            </div>
        </div>
    )
}

export default Details
