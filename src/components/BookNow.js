import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Row, Col } from '../modules/helper'
import { TextField, Button } from '@mui/material'

export default function BookNow() {
  return (
    <>
      <Helmet>
        <title>Happy Wife - Book Now - Booking Form</title>
        <meta name="description" content="Happy Wife - Book Now - Booking Form" />
      </Helmet>
      <Col
        alignItems='center'
      >
        <Row
          m='4vw 0'
          p='2vw'
          width='75%'
          justifyContent='center'
          border='1px solid'
        >Book Now</Row>

        <Row m='0 0 4vw 0'>Please complete the form below and we will reply promptly. Let us know how we can best serve you.</Row>

        <Row
          width='70%'
          component='form'
          action="https://formspree.io/f/mpzbword"
          method="POST"
          justifyContent='center'
        >
          <Row
            component='fieldset'
            width='100%'
            justifyContent='center'
          >
            <legend>Contact Form</legend>
            <Col
              width='60%'
              alignSelf='center'
              m='2vh 0'
              gap='5vh'
            >
              <TextField
                label='name'
                name='name'
                required
              />
              <TextField
                label='email'
                name='email'
                required
                type='email'
              />
              <TextField
                label='phone'
                name='phone'
                required
                type='tel'
              />
              <TextField
                label='form'
                name='content'
                placeholder="Please tell us what time you'd like us to haul your stuff, as well as what it is we are hauling"
                required
                multiline
                rows='5'
              />
              <Button component='label'>
                Send Email
                <input hidden type='submit' name='send' />
              </Button>
            </Col>
          </Row>
        </Row>
      </Col>
    </>
  )
}