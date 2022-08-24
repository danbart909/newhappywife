import React, { useState } from 'react'
import { Row, Col } from '../modules/helper'
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
      >

        <Row
          m='4vw 0'
          p='2vw'
          width='75%'
          justifyContent='center'
          border='1px solid'
        >Our Service Areas</Row>

        <Row
          width='100%'
          m='0 5vw'
          justifyContent='space-evenly'
          // border='1px solid'
        >
          <Col
            alignItems='center'
            // border='1px solid green'
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

          <Row>
            <img
              alt='city'
              src={map}
              style={{ height: 570 }}
            />
          </Row>
        </Row>

      </Col>
    </>
  )
}

const City = (props) => {
  return (<Row
    {...props}
    width='80%'
    justifyContent='center'
    m='.5vw 1vw'
    p='.5vw'
    border='1px solid'
  >
    {props.children}
  </Row>)
}