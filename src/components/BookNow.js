import React from 'react'
import { Helmet } from 'react-helmet'
import { Row, Col, TitleBox, C1 } from '../modules/helper'
import { TextField, Button } from '@mui/material'
import carry1 from '../images/carry1.jpg'

export default function BookNow() {
  return (
    <>
      <Helmet>
        <title>Happy Wife - Book Now - Booking Form</title>
        <meta name="description" content="Happy Wife - Book Now - Booking Form" />
      </Helmet>
      <Col
        p='0 0 6vh 0'
        alignItems='center'
        style={{
          backgroundImage: `url(${carry1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
        color={C1}
      >
        <TitleBox>Book Now</TitleBox>

        <Col
          m='0 0 4vw 0'
          p='4vh'
          gap='4vh'
          backgroundColor='rgba(0,0,0,.8)'
          alignItems='center'
          border='1px solid'
        >
          {/* <Row>Our Phone Number is 762.217.3303. Please text or leave a message if there is no answer.</Row> */}
          <Row>Our email is henry@prettygoodinc.com</Row>
          <Row>If you don't want to use a phone or email, you can complete the form below and we will reply at first chance.</Row>
        </Col>

        <Row
          width='60%'
          component='form'
          action="https://formspree.io/f/mpzbword"
          method="POST"
          justifyContent='center'
          backgroundColor='rgba(0,0,0,.8)'
        >
          <Row
            component='fieldset'
            width='100%'
            justifyContent='center'
          >
            <Col
              width='80%'
              alignSelf='center'
              p='2vw'
              m='2vh 0'
              gap='5vh'
              backgroundColor='white'

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
              <Button
                component='label'
                variant='outlined'
              >
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