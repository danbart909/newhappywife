import React, { useState } from 'react'
import { Row, Col } from '../modules/helper'
import { Helmet } from 'react-helmet'
import pile1 from '../images/pile1.jpg'
import pile2 from '../images/pile2.jpg'
import pile3 from '../images/pile3.jpg'
import pile4 from '../images/pile4.jpg'
import trailer1 from '../images/trailer1.jpg'
import trailer2 from '../images/trailer2.jpg'
import trailer3 from '../images/trailer3.jpg'
import trailer4 from '../images/trailer4.jpg'

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
      >

        <Row
          m='4vw 0'
          p='2vw'
          width='75%'
          justifyContent='center'
          border='1px solid'
          onMouseEnter={() => {
            setPic1(trailer1)
            setPic2(pile1)
          }}
        >Our Pricing</Row>
        
        <Row
          width='90%'
          justifyContent='space-evenly'
        >
          <Col
            alignItems='center'
            p='4vw 0'
            gap='4vw'
            // width='80%'
            // border='1px solid'
          >
            <Row onMouseEnter={() => {
              setPic1(trailer1)
              setPic2(pile1)
            }}>A full load is almost always large enough to clean out the excess junk from a 5 person, 3200 sq ft house!</Row>
            <Row onMouseEnter={() => {
              setPic1(trailer1)
              setPic2(pile1)
            }}>For single items or a small amount, call or email us for a quote!</Row>
            <Row
              p='2vw 0'
              width='100%'
              justifyContent='center'
              onMouseEnter={() => {
                setPic1(trailer2)
                setPic2(pile2)
              }}
              border='1px solid'
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
            >A 2/3 load is $350</Row>
            <Row
              p='2vw 0'
              width='100%'
              justifyContent='center'
              onMouseEnter={() => {
                setPic1(trailer4)
                setPic2(pile4)
              }}
              border='1px solid'
            >A full load is $475</Row>
            <Row onMouseEnter={() => {
              setPic1(trailer1)
              setPic2(pile1)
            }}>We only charge you for what you use!</Row>
          </Col>

          <Col
            justifyContent='space-evenly'
            // border='1px solid'
          >
            <img
              alt='this trailer fills up'
              src={pic1}
              style={{ height: 300 }}
            />
            <img
              alt='this pile gets smaller'
              src={pic2}
              style={{ height: 300 }}
            />
          </Col>
        </Row>

      </Col>
    </>
  )
}