import React from 'react'
import { Row, Col } from '../modules/helper'
import { Helmet } from 'react-helmet'

export default function Pricing() {
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
        >Our Pricing</Row>
        
        <Col
          alignItems='center'
          p='4vw 0'
          gap='4vw'
          width='80%'
          border='1px solid'
        >
          <Row>A full load is almost always large enough to clean out the excess junk from a 5 person, 3200 sq ft house!</Row>
          <Row>We only charge you for what you use!</Row>
          <Row>A full load is $475</Row>
          <Row>A 2/3 load is $350</Row>
          <Row>A 1/3 load is $250</Row>
          <Row>For single items or a small amount, call or email us for a quote!</Row>
        </Col>

      </Col>
    </>
  )
}