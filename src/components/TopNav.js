import React, { Component } from 'react'
import companylogo from '../images/companylogo.png'

export default class TopNav extends Component {
  render() {
    return (
      <div id='top-nav-container'>
        <div id='top-nav'>

          <div id='top-nav-left'>
            <img src={companylogo} alt='company logo' />
          </div>

          <div id='top-nav-right'>

            <div id='top-nav-right-header'>
              <span>A Customer Service Driven Junk Removal Company</span>
            </div>

            <div id='top-nav-right-number'>
              <a href='tel:762-217-3303'><span>762.217.3303</span></a>
            </div>

            <div id='top-nav-right-phone-text'>
              <a href='tel:762-217-3303'><i className="fas fa-phone"></i> Call </a><span> or </span><a href='sms:7622173303'> <i className="fas fa-comment-dots"></i> Text</a>
            </div>

          </div>

        </div>
      </div>
    )
  }
}