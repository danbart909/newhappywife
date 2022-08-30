import React from 'react'
import { Row, Col, Title, C1, C2 } from '../modules/helper'
import { Link } from '@mui/material'
import companylogo from '../images/companylogo.png'

export default function TopNav() {
  return (
    <Row style={{ background: `linear-gradient(to right, #acccc6, #524d5c` }}>

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
          <Title
            textAlign='right'
            color={C1}
          >A Customer Service Driven Junk Removal Company</Title>

          <Row>
            <Link
              href='tel:762-217-3303'
              underline='hover'
              color={C1}
            >762.217.3303</Link>
          </Row>

          <Row color={C1}>
            <Link
              href='tel:762-217-3303'
              underline='hover'
              color={C1}
            >
              <i className="fas fa-phone"/> Call 
            </Link>
            <Row m='0 .5vw'>or</Row>
            <Link
              href='sms:7622173303'
              underline='hover'
              color={C1}
            >
              <i className="fas fa-comment-dots"/> Text
            </Link>
          </Row>
        </Col>

    </Row>
  )
}