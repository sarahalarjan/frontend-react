import React from 'react'
import './blackCard.css';
import { Col, Row } from 'react-bootstrap';
import MusicDb from '../../assets/logo-white-01.png'

function BlackCard() {
    return (
        <div className='blackCard'>

        <Row >
          <Col xs={12} > <img src={MusicDb} alt="MusicDb" className='MusicDb' /></Col>
        </Row>
        <Row  >
          <Col xs={2}  ></Col>
          <Col xs={3} className='route'>PRFILE</Col>
        </Row>
        <Row >
          <Col xs={2} ></Col>
          <Col xs={3} className='route'>SGIN IN</Col>
        </Row>
        <Row >
          <Col xs={2} ></Col>
          <Col xs={3} className='route'>MUSIC</Col>
        </Row>
        <Row style={{ marginTop:'5px' }} >
        <Col xs={1} className='route2'>LEGEL</Col>
          <Col xs={2} className='route2'>PRIVACY CENTER</Col>
          <Col xs={2} className='route2'>PRIVACY POLICY</Col>
          <Col xs={1} className='route2'>COOKIES</Col>
          <Col xs={2} className='route2'>ABOUT ADS</Col>
          <Col xs={2} className='route2'></Col>
          <Col xs={2} className='route2'>©2019 MUSICDB</Col>
        </Row>
      </div>
    )
}

export default BlackCard