import React from 'react'
import './Details.css'

function Details(props) {
    const p = props.info[props.id-1];
    return (
        <div id="detail_view">
            <div>
                <span onClick={props.onClose} href='#'>Close</span>
                <h1>{p.title}</h1>
                <p>{p.description}</p>
            </div>
        </div>
    )
}

export default Details
