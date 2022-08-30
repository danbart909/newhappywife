import React, { useState } from 'react'
import { Row, Col, Title, TitleBox, C1, C2 } from '../modules/helper'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Acworth from '../images/Acworth.jpg'
import Austell from '../images/Austell.jpg'
import Kennesaw from '../images/Kennesaw.jpg'
import Marietta from '../images/Marietta.jpg'
import Mableton from '../images/Mableton.jpg'
import PowderSprings from '../images/PowderSprings.jpg'
import Roswell from '../images/Roswell.jpg'
import Smyrna from '../images/Smyrna.jpg'
import Vinings from '../images/Vinings.jpg'
import Woodstock from '../images/Woodstock.jpg'
import junk2 from '../images/junk2.jpg'

export default function Areas() {
  const [map, setMap] = useState(Marietta)

  return (
    <>
      <Helmet>
        <title>Service Areas</title>
        <meta name="description" content="Happy Wife - Service Areas" />
      </Helmet>
      <Col
        alignItems='center'
        textAlign='center'
        style={{
        backgroundImage: `url(${junk2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
      color={C1}
      >

        <TitleBox>Our Areas of Service</TitleBox>

        {/* <Row
          m='0 7vw 3vw'
          p='1vw 6vw'
          backgroundColor='rgba(0,0,0,.8)'
          border='1px solid'
        >price of gas and such</Row> */}

        <Row
          width='100%'
          p='0 0 5vw 5vw'
          justifyContent='space-evenly'
        >
          <Col
            flex='1'
            alignItems='center'
          >
            <City onMouseEnter={() => setMap(Acworth)}>Acworth</City>
            <City onMouseEnter={() => setMap(Austell)}>Austell</City>
            <City onMouseEnter={() => setMap(Kennesaw)}>Kennesaw</City>
            <City onMouseEnter={() => setMap(Marietta)}>Marietta</City>
            <City onMouseEnter={() => setMap(Mableton)}>Mableton</City>
            <City onMouseEnter={() => setMap(PowderSprings)}>Powder Springs</City>
            <City onMouseEnter={() => setMap(Roswell)}>Roswell</City>
            <City onMouseEnter={() => setMap(Smyrna)}>Smyrna</City>
            <City onMouseEnter={() => setMap(Vinings)}>Vinings</City>
            <City onMouseEnter={() => setMap(Woodstock)}>Woodstock</City>
          </Col>

          <Row
            flex='3'
            justifyContent='center'
            alignItems='center'
          >
            <img
              alt='city'
              src={map}
              style={{ height: '40vw' }}
            />
          </Row>
        </Row>

      </Col>
    </>
  )
}

const City = (props) => {
  return (<Title
    {...props}
    width='80%'
    justifyContent='center'
    m='.5vw 1vw'
    p='.5vw'
    border='1px solid'
    backgroundColor='rgba(0,0,0,.8)'
    sx={{ '&:hover': { backgroundColor: C2 } }}
  >
    {props.children}
  </Title>)
}