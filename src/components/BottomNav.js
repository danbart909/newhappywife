import React, { useState } from 'react'
import { Row, C1, C2 } from '../modules/helper'
import { NavLink } from 'react-router-dom'
import { Link } from '@mui/material'

export default function BottomNav() {
  // const [homeLink, setHome] = useState(false)
  // const [areasLink, setAreas] = useState(false)
  // const [servicesLink, setServices] = useState(false)
  // const [pricingLink, setPricing] = useState(false)
  // const [bookLink, setBook] = useState(false)

  const list = [
    ['/', 'Home'],
    ['/areas', 'Areas'],
    ['/services', 'Services'],
    ['/pricing', 'Pricing'],
    ['/booknow', 'Contact']
  ]

  const xLink = {
    flex: 1,
    height: '100%',
    textDecoration: 'none',
    backgroundColor: C1,
    color: C2,
    border: '1px solid black'
  }

  const activeLink = {
    flex: 1,
    height: '100%',
    textDecoration: 'none',
    backgroundColor: C2,
    color: C1,
    border: '1px solid black'
  }

  const navList = () => {
    let html = []
    list.map(x => html.push(
      <NavLink
        to={x[0]}
        style={({isActive}) => isActive ? activeLink : xLink }
      >
        <Row
          height='100%'
          justifyContent='center'
          alignItems='center'
          transition='1s'
          sx={{ '&:hover': {
            backgroundColor: C2,
            color: C1,
          } }}
        >{x[1]}</Row>
      </NavLink>
    ))
    return html
  }

  return (
    <Row height='4vh'>
      {navList()}
      <Row
        flex='1'
        height='100%'
        justifyContent='space-evenly'
        alignItems='center'
        backgroundColor={C1}
        border='1px solid'
      >
        <Link href='http://www.facebook.com/happywifejunkservice' target='_blank' style={{ color: C2 }}><i className='fab fa-facebook' role='link'/></Link>
        <Link href='https://g.page/HappyWife?gm' target='_blank' style={{ color: C2 }}><i className='fab fa-google' role='link'/></Link>
      </Row>
    </Row>
  )
}

{/* <div id='bottom-nav-right'>
  <a href='http://www.facebook.com/happywifejunkservice' target='_blank'><i className='fab fa-facebook' id='facebook-button' role='link'></i></a>
  <a href='' target='_blank'><i className='fab fa-twitter' id='twitter-button' role='link'></i></a>
  <a href='https://g.page/HappyWife?gm' target='_blank'><i className='fab fa-google' id='google-button' role='link'></i></a>
  <a href='' target='_blank'><i className='fab fa-linkedin' id='linkedin-button' role='link'></i></a>
  <a href='' target='_blank'><i className='fab fa-youtube' id='youtube-button' role='link'></i></a>
  <a href='' target='_blank'><i className='fas fa-envelope' id='email-button' role='link'></i></a>
</div> */}