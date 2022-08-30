import React, { useState } from 'react'
import { Row, Col, TitleBox, C1, C2 } from '../modules/helper'
import { Helmet } from 'react-helmet'
import pile1 from '../images/pile1.jpg'
import pile2 from '../images/pile2.jpg'
import pile3 from '../images/pile3.jpg'
import pile4 from '../images/pile4.jpg'
import trailer1 from '../images/trailer1.jpg'
import trailer2 from '../images/trailer2.jpg'
import trailer3 from '../images/trailer3.jpg'
import trailer4 from '../images/trailer4.jpg'
import carry3 from '../images/carry3.jpg'

export default function Pricing() {
  const [pic1, setPic1] = useState(pile1)
  const [pic2, setPic2] = useState(trailer1)

  return (
    <>
      <Helmet>
        <title>Happy Wife - Pricing Information</title>
        <meta name="description" content="Happy Wife - Pricing Information" />
      </Helmet>
      <Col
        alignItems='center'
        textAlign='center'
        style={{
          backgroundImage: `url(${carry3})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
        color={C1}
      >

        <TitleBox
          onMouseEnter={() => {
            setPic1(trailer1)
            setPic2(pile1)
          }}
        >Our Pricing</TitleBox>
        
        <Row
          m='0 0 4vw'
          width='95%'
          backgroundColor='rgba(0,0,0,.8)'
          border='1px solid'
          // justifyContent='space-evenly'
        >
          <Col
            alignItems='center'
            p='4vw'
            m='0 4vh 0 0'
            gap='4vw'
            minWidth='200px'
            // border='1px solid'
            onMouseLeave={() => {
              setPic1(trailer1)
              setPic2(pile1)
            }}
          >
            <Row>A full load is almost always large enough to clean out the excess junk from a 5 person, 3200 sq ft house!</Row>
            <Row>Our ability to pick up "one or two" items or a "small amount" is strongly location-dependent. Please contact us for more information.</Row>
            <Row
              p='2vw 0'
              width='100%'
              justifyContent='center'
              onMouseEnter={() => {
                setPic1(trailer2)
                setPic2(pile2)
              }}
              border='1px solid'
              sx={{ '&:hover': {
                backgroundColor: C2
              } }}
            >A 1/3 load is $250</Row>
            <Row
              p='2vw 0'
              width='100%'
              justifyContent='center'
              onMouseEnter={() => {
                setPic1(trailer3)
                setPic2(pile3)
              }}
              border='1px solid'
              sx={{ '&:hover': {
                backgroundColor: C2
              } }}
            >A 2/3 load is $375</Row>
            <Row
              p='2vw 0'
              width='100%'
              justifyContent='center'
              onMouseEnter={() => {
                setPic1(trailer4)
                setPic2(pile4)
              }}
              border='1px solid'
              sx={{ '&:hover': {
                backgroundColor: C2
              } }}
            >A full load is $500</Row>
            <Row>We only charge you for what you use!</Row>
          </Col>

          <Col
            justifyContent='space-evenly'
            p='0 4vw 0 0'
          >
            <img
              alt='this trailer fills up'
              src={pic1}
              style={{ height: 250, border: '1px solid' }}
            />
            <img
              alt='this pile gets smaller'
              src={pic2}
              style={{ height: 250, border: '1px solid' }}
            />
          </Col>
        </Row>

      </Col>
    </>
  )
}