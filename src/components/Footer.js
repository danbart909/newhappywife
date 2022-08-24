import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from '../modules/helper'
import { Box } from '@mui/material'

export default class Footer extends Component {
  render() {
    return (
      <Row
        // width='100vw'
        m='4vw 0 0 0'
        p='0 0 2vw 0'
        border='1px solid'
        // sx={{ width: '100%' }}
      >

          <Col
            flex='1'
            p='1vw 0 0 0'
            gap='1vw'
            alignItems='center'
            // border='1px solid'
          >
            <Row>Our Info</Row>
  
            <Col alignItems='center'>
              <Row>Pretty Good Inc, DBA</Row>
              <Row>Happy Wife Junk Services</Row>
            </Col>
  
            <Col alignItems='center'>
              <Row>1820 Tree Top Way</Row>
              <Row>Marietta, GA 30062</Row>
            </Col>
  
            <Col alignItems='center'>
              <Row>henry@prettygoodinc.com</Row>
              <Row>762.217.3303</Row>
            </Col>
          </Col>
  
          <Col
            flex='1'
            p='1vw 0 0 0'
            gap='1vw'
            alignItems='center'
            // border='1px solid'
          >
            <Row>Our Services</Row>
  
            <Col
              alignItems='center'
              gap='.3vw'
            >
              <Row>Appliance Removal</Row>
              <Row>Basement Clean Out</Row>
              <Row>Garage Clean Out</Row>
              <Row>Household Junk Removal</Row>
              <Row>Moving Junk</Row>
              <Row>Yard Debris Removal</Row>
              <Row>Apartment Clean Out</Row>
              <Row>Office Junk Removal</Row>
              <Row>Storage Unit Clean Out</Row>
              <Row>Warehouse Clean Out</Row>
              <Row>Couth Removal</Row>
              <Row>Dresser Removal</Row>
              <Row>Entertainment Center Removal</Row>
              <Row>Table and Chairs Removal</Row>
              <Row>TV Removal</Row>
            </Col>
          </Col>
  
          <Col
            flex='1'
            p='1vw 0 0 0'
            gap='1vw'
            alignItems='center'
            // border='1px solid'
          >
            <Row>Our Areas</Row>
  
            <Col
              alignItems='center'
              gap='.3vw'
            >
              <Row>Acworth</Row>
              <Row>Austell</Row>
              <Row>Kennesaw</Row>
              <Row>Marietta</Row>
              <Row>Mableton</Row>
              <Row>Powder Springs</Row>
              <Row>Roswell</Row>
              <Row>Smyrna</Row>
              <Row>Vinings</Row>
              <Row>Woodstock</Row>
            </Col>
          </Col>

      </Row>
    )
  }
}
