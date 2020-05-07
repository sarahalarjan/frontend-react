import React from 'react'
import './whiteCard.css';
import Title from '../Title/title';
import Content from '../Content/content'

function WhiteCard() {
    return (
        <div className='whiteCard'>
        <Title title={'GET PRODUCTION WITH MUSICDB'} />
        <Content subTitle={'PICK YOUR PREFERED INSTRUMENT'} content={'PICK THE INSTRUMENTs YOU NEED TO COMPOSE YOUR PEICE'} />

        <button className='button'>START COMPOSING</button>
      </div>

    )
}

export default WhiteCard