import React from 'react'
import { Row, Col } from '../modules/helper'

export default function Virtues() {
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
        <Row>Open and Honest Pricing</Row>
        <Col gap='1vw'>
          <Row>"You shall have just balances, just weights, a just ephah, and a just hin: I am the LORD your God, who brought you out of the land of Egypt." Leviticus 19:36</Row>
          <Row>We strive to be as straight forward and open as possible. You can trust us to charge only for as much as you use.</Row>
        </Col>
      </Col>

      <Col
        flex='1'
        alignItems='center'
        textAlign='center'
        p='1vw'
        gap='2vw'
        border='1px solid'
      >
        <Row>Cleanliness</Row>
        <Col gap='1vw'>
          <Row>"But everything should be done in a fitting and orderly way." 1 Cor 14:40</Row>
          <Row>We change into clean sneakers before entering your home. Those sneakers don't touch anything but hardwood, carpet, and concrete.</Row>
        </Col>
      </Col>

      <Col
        flex='1'
        alignItems='center'
        textAlign='center'
        p='1vw 0'
        gap='2vw'
        border='1px solid'
      >
        <Row>Trustworthy Service</Row>
        <Col gap='1vw'>
          <Row>"Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward, You are serving the Lord Christ." Col 3:23-24</Row>
          <Row>You deserve honest service, and we are dedicated to bring that to you. When you open your doors to us, we will go above and beyond to ensure you feel safe.</Row>
        </Col>
      </Col>

    </Row>
  )
}