import React from 'react'
import { Row, Col } from '../modules/helper'
import companylogo from '../images/companylogo.png'

export default function TopNav() {
  return (
    <Row>

        <Row
          flex='1'
          justifyContent='center'
        >
          <img
            src={companylogo}
            alt='company logo'
            style={{ height: 120 }}
          />
        </Row>

        <Col
          flex='7'
          p='0 0.5vw 0 0'
          alignItems='flex-end'
          justifyContent='space-evenly'
        >
          <Row>A Customer Service Driven Junk Removal Company</Row>

          <Row>
            <a href='tel:762-217-3303'><span>762.217.3303</span></a>
          </Row>

          <Row>
            <a href='tel:762-217-3303'><i className="fas fa-phone"></i> Call </a><span> or </span><a href='sms:7622173303'> <i className="fas fa-comment-dots"></i> Text</a>
          </Row>
        </Col>

    </Row>
  )
}