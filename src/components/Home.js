import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from '../modules/helper'
import AboutUs from './AboutUs'
// import MidBanner from './MidBanner'
import Virtues from './Virtues'
import companylogo from '../images/companylogo.png'
import trailer1 from '../images/trailer1.jpg'
import trailer3 from '../images/trailer3.jpg'

export default function Home() {
  const [pic, setPic] = useState(trailer1)

  return (
    <Col
      m='10vh 0 0 0'
    >

      <Row
        height='60vh'
      >
        <Row
          flex='1'
          justifyContent='center'
          alignItems='center'
        >
          <img
            src={companylogo}
            alt='company logo 2'
            style={{ height: '35vw' }}
          />
        </Row>

        <Row
          flex='1'
        >
          <Col
            flex='1'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Link to='/pricing' onMouseEnter={() => setPic(trailer1)}>
              <Row
                p='2vw'
                border='1px solid'
              >SEE PRICING</Row>
            </Link>
            <Link to='/booknow' onMouseEnter={() => setPic(trailer3)}>
              <Row
                p='2vw'
                border='1px solid'
              >GET A QUOTE</Row>
            </Link>
          </Col>
          <Row
            flex='4'
            justifyContent='center'
            alignItems='center'
            // border='1px solid'
          >
            <img
              alt='trailer'
              src={pic}
              style={{ height: '20vw' }}
            />
          </Row>
        </Row>
      </Row>

      <Col
        m='6vw 0 0 0'
      >
        <AboutUs />
        <Virtues />
      </Col>
    </Col>
  )
}