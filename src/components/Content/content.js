import React from 'react'
import './content.css';

function Content(props) {
    return (
        <div >

            <h4 className="subTitle">{props.subTitle}</h4>
            <p className="content">{props.content}</p>
        </div>
    )
}

export default Content

