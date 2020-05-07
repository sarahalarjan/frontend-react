import React from 'react'
import './redCard.css';
import { Col, Row } from 'react-bootstrap';
import HitMe from '../../assets/hit-it-01.png'
import Artist from '../../assets/artist.png'
function RedCard() {
    return (
        <div className='redCard'>
        <Row >
          <Col xs={3} > <h1>AMP UP <br /> THOSE DBS</h1> <h6>MAKE MUSIC ON THE GO.</h6></Col>
          <Col xs={3}></Col>
          <Col xs={2} className='boxs'>
            <img src={Artist} alt='pic' style={{ height: 135, width: 120 }}></img>
          </Col>
          <Col xs={2} className='boxs'> </Col>
          <Col xs={2} className='boxs'> </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <img src={HitMe} alt="Hit Me" className='hit' />
          </Col>
          <Col xs={3}></Col>
          <Col xs={2} className='boxs'> </Col>
          <Col xs={2} className='boxs'> </Col>
          <Col xs={2} className='boxs'> </Col>
        </Row>

      </div>
    )
}

export default RedCard