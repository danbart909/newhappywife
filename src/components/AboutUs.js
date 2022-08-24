import React from 'react'
import { Row, Col } from '../modules/helper'

export default function AboutUs() {
  return (
    <Row
      m='0 2vw 5vh'
      gap='2vw'
    >

      <Col
        flex='1'
        alignItems='center'
        textAlign='center'
        p='1vw 0'
        gap='2vw'
        border='1px solid'
      >
        <Row>About Us</Row>
        <Row>A family-owned and operated company, Happy Wife Junk Service was started by a father and son duo, and is a consumer service driven junk removal company based in Marietta, Georgia. We believe passionately that only trustworthy men and women belong in your home. We strive to hire the best and to bring you the best service. At Happy Wife, we pride ourselves on taking care of you.</Row>
      </Col>

      <Col
        flex='1'
        alignItems='center'
        textAlign='center'
        p='1vw 0'
        gap='2vw'
        border='1px solid'
      >
        <Row>What We Believe</Row>
        <Row>You deserve quality service from anybody you invite into your home. Whether it be landscaping, plumbing, or contractors, you need honest, upstanding men and women. With Happy Wife, junk removal is one less thing you need to worry about, giving you peace of mind. Our junk removal experts will honor your home like you do.</Row>
      </Col>

      <Col
        flex='1'
        alignItems='center'
        textAlign='center'
        p='1vw 0'
        gap='2vw'
        border='1px solid'
      >
        <Row>Our Services</Row>
        <Row>Our crews will always strive to serve you, no matter the job. We can do anything, from furniture removal, refrigerator removal, contractor debris clean up, and storage unit clean out, to estate sale clean up and commercial junk removal.</Row>
      </Col>

    </Row> 
  )
}