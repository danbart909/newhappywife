import React, { Component, createRef } from 'react'
import { NavLink } from 'react-router-dom'
import Sticky from 'react-sticky-el';

export default class BottomNav extends Component {
  render() {
    return (
      <Sticky>
        <div id='bottom-nav-container'>
          <div id='bottom-nav'>
            <div id='bottom-nav-left'>
              <div className='bottom-nav-button'>
                <NavLink exact={true} activeClassName='is-active' to='/' id='bottom-nav-home-link'>
                  <span>Home</span>
                </NavLink>
              </div>
              <div className='bottom-nav-button'>
                <NavLink to='/areas' activeClassName='is-active' id='bottom-nav-areas-link'>
                  <span>Areas</span>
                </NavLink>
              </div>
              <div className='bottom-nav-button'>
                <NavLink to='/services' activeClassName='is-active' id='bottom-nav-services-link'>
                  <span>Services</span>
                </NavLink>
              </div>
              <div className='bottom-nav-button'>
                <NavLink to='/pricing' activeClassName='is-active' id='bottom-nav-pricing-link'>
                  <span>Pricing</span>
                </NavLink>
              </div>
              <div className='bottom-nav-button'>
                <NavLink to='/booknow' activeClassName='is-active' id='bottom-nav-booknow-link'>
                  <span id='bottom-nav-booknow-link-span-1'>Book</span>
                  <span id='bottom-nav-booknow-link-span-2'>Book Now</span>
                </NavLink>
              </div>
            </div>
              
            <div id='bottom-nav-right'>
              <a href='http://www.facebook.com/happywifejunkservice' target='_blank'><i className='fab fa-facebook' id='facebook-button' role='link'></i></a>
              {/* <a href='' target='_blank'><i className='fab fa-twitter' id='twitter-button' role='link'></i></a> */}
              <a href='https://g.page/HappyWife?gm' target='_blank'><i className='fab fa-google' id='google-button' role='link'></i></a>
              {/* <a href='' target='_blank'><i className='fab fa-linkedin' id='linkedin-button' role='link'></i></a> */}
              {/* <a href='' target='_blank'><i className='fab fa-youtube' id='youtube-button' role='link'></i></a> */}
              {/* <a href='' target='_blank'><i className='fas fa-envelope' id='email-button' role='link'></i></a> */}
            </div>
          </div>
        </div>
      </Sticky>
    )
  }
}