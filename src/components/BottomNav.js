import React from 'react'
import { Row, Col } from '../modules/helper'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
  const list = [
    ['/', 'Home'],
    ['/areas', 'Areas'],
    ['/services', 'Services'],
    ['/pricing', 'Pricing'],
    ['/booknow', 'Book Now']
  ]

  const navList = () => {
    let html = []
    list.map(x => html.push(
      <Row
        flex='1'
        justifyContent='center'
        alignItems='center'
      >
        <NavLink
          to={x[0]}
        >{x[1]}</NavLink>
      </Row>
    ))
    return html
  }

  return (
    <Row
      height='2vw'
      // alignItems='center'
      border='1px solid'
    >
      {navList()}
      <Row
        flex='1'
        justifyContent='center'
        alignItems='center'
      >
        Buttons
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