import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Title, C1, C2 } from '../modules/helper'
import { Box } from '@mui/material'

export default class Footer extends Component {
  render() {
    return (
      <Row
        p='0 0 2vh 0'
        borderTop='1px solid'
        backgroundColor={C2}
        color={C1}
      >

          <Col
            flex='1'
            p='3vh 0 0 0'
            gap='4vh'
            alignItems='center'
            // border='1px solid'
          >
            <Title>Our Info</Title>
  
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
            p='3vh 0 0 0'
            gap='4vh'
            alignItems='center'
            textAlign='center'
            // border='1px solid'
          >
            <Title>Our Services</Title>
  
            <Col
              alignItems='center'
              gap='.5vh'
            >
              <Row>Basement Clean Out</Row>
              <Row>Garage Clean Out</Row>
              <Row>Household Junk Removal</Row>
              <Row>Moving Junk</Row>
              <Row>Yard Debris Removal</Row>
              <Row>Apartment Clean Out</Row>
              <Row>Office Junk Removal</Row>
              <Row>Storage Unit Clean Out</Row>
              <Row>Warehouse Clean Out</Row>
              <Row>Table and Chairs Removal</Row>
              <Row>TV Removal</Row>
              <Row>...and more!</Row>
            </Col>
          </Col>
  
          <Col
            flex='1'
            p='3vh 0 0 0'
            gap='4vh'
            alignItems='center'
            // border='1px solid'
          >
            <Title>Our Areas</Title>
  
            <Col
              alignItems='center'
              gap='.5vh'
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
