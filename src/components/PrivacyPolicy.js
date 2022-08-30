import React from 'react'
import { Row, Col, Title, C1, C2 } from '../modules/helper'

export default function PrivacyPolicy() {
  return (
    <>
      <Row
        width='100%'
      >

        <Col
          m='10vw 0'
          gap='2vw'
          width='100%'
          alignItems='center'
        >
          <Row>Privacy Policy for wrkr and Turtle Race!</Row>

          <hr />

          <Col
            alignItems='center'
            gap='2vw'
          >
            <Row>All information is kept to the Google Firebase system and none of it is used to identify anybody nor is it sold for profit.</Row>
            <Row>Pretty Good Inc. © 2022</Row>
          </Col>
        </Col>

      </Row> 
    </>
  )
}