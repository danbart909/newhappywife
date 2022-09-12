import React from 'react'
import { Row, C1, C2 } from '../modules/helper'
import { NavLink } from 'react-router-dom'
import { Link } from '@mui/material'

export default function BottomNav() {

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
          style={{ transition: '0.5s' }}
          sx={{ '&:hover': {
            backgroundColor: C2,
            color: C1,
          } }}
        >
          <Row
            sx={{ '&:hover': {
              borderBottom: `1px solid ${C1}`,
              padding: '0 0 2px 0'
            } }}
          >{x[1]}</Row>
        </Row>
      </NavLink>
    ))
    return html
  }

  return (
    <Row height='5vh'>
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