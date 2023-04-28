import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Box } from '@mui/material'
import { Row, Col, Title, C1, C2 } from '../modules/helper'
import AboutUs from './AboutUs'
// import MidBanner from './MidBanner'
import Virtues from './Virtues'
import companylogo from '../images/companylogo.png'
import hometrailer1 from '../images/hometrailer1.jpg'
import hometrailer2 from '../images/hometrailer2.jpg'
import hometrailer3 from '../images/hometrailer3.jpg'
import david1 from '../images/david1.jpg'

export default function Home() {
  const [pic, setPic] = useState(hometrailer2)

  return (
    <Col
      style={{
        backgroundImage: `url(${david1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >

      <Row
        m='4vw 0 0 0'
        backgroundColor='rgba(0,0,0,.8)'
      >
        <Row
          flex='2'
          justifyContent='center'
          alignItems='center'
          // border='1px solid'
        >
          <img
            src={companylogo}
            alt='company logo 2'
            style={{ height: '30vw' }}
          />
        </Row>

        <Row
          flex='3'
        >
          <Col
            flex='1'
            justifyContent='space-evenly'
            alignItems='center'
            textAlign='center'
          >
            <Link
              style={{ textDecoration: 'none' }}
              to='/pricing'
              onMouseEnter={() => setPic(hometrailer1)}
            >
              <Title
                p='1vw'
                border='1px solid'
                borderRadius='10px'
                // backgroundColor={C2}
                color={C1}
                style={{ transition: '0.5s' }}
                sx={{ '&:hover': {
                  backgroundColor: C2,
                } }}
              >See Pricing</Title>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to='/booknow'
              onMouseEnter={() => setPic(hometrailer3)}
            >
              <Title
                p='1vw'
                border='1px solid'
                borderRadius='10px'
                // backgroundColor={C2}
                color={C1}
                style={{ transition: '0.5s' }}
                sx={{ '&:hover': {
                  backgroundColor: C2,
                } }}
              >Get a Quote</Title>
            </Link>
          </Col>
          <Row
            flex='3'
            justifyContent='center'
            alignItems='center'
            // border='1px solid'
          >
            <img
              alt='trailer'
              src={pic}
              style={{ height: '22vw' }}
            />
          </Row>
        </Row>
      </Row>

      <Col
        m='6vw 6vw 0'
        p='1vw 6vw'
        gap='2vw'
        justifyContent='center'
        textAlign='center'
        backgroundColor='rgba(0,0,0,.9)'
        color={C1}
        border='1px solid'
        borderRadius='10px'
      >
        <Row
          justifyContent='center'
          textAlign='center'
        >Welcome to Happy Wife Junk Service! We provide junk removal service to the public mostly on Tuesdays and Saturdays.</Row>
        <Row
          justifyContent='center'
          textAlign='center'
        >If you need something recycled, please seek out <a href='https://www.google.com/search?q=recycling+center+cobb+county'><Row pl='7px'>recycling services</Row></a>.</Row>
      </Col>

      {/* <Row
        m='4vw 10vw 0'
        p='1vw 6vw'
        justifyContent='center'
        textAlign='center'
        backgroundColor='rgba(0,0,0,.9)'
        color={C1}
        border='1px solid'
        borderRadius='10px'
      >Welcome to Happy Wife Junk Service! We provide junk removal service to the public mostly on Tuesdays and Saturdays.</Row>

      <Row
        m='4vw 10vw 0'
        p='1vw 6vw'
        justifyContent='center'
        textAlign='center'
        backgroundColor='rgba(0,0,0,.9)'
        color={C1}
        border='1px solid'
        borderRadius='10px'
      >If you need something recycled, please seek out <a href='https://www.google.com/search?q=recycling+center+cobb+county'><Row pl='7px'>recycling services</Row></a>.</Row> */}

      <Col
        m='6vw 0 0 0'
      >
        <AboutUs />
        <Virtues />
      </Col>
    </Col>
  )
}