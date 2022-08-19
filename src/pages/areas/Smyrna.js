import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class Smyrna extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Smyrna Junk Removal</title>
          <meta name="description" content="Haul away your garbage with the best junk removal company in Smyrna, GA" />
        </Helmet>
        <div className='gD areas Smyrna UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Smyrna</span>
            </div>
            <div className='gD-body'>
              <span>Our Smyrna Junk Removal team believes that you deserve to know that everyone who comes into your house should be upright, honest men and women. That’s why we honor your home and your family. We will never track dirt into you house or use profanity around you or your children. Your comfort and ease of mind is our utmost concern. We never provide a service that we wouldn’t be proud of! Whether you need furniture removal, appliance removal, property clean out, or and other form of household junk, Happy Wife junk service is there for you. Our fast, reliable service is a favorite for those looking for Smyrna junk hauling.</span>
            </div>
            <div className='gD-go-back'>
              <Link to='/areas' className='areas-goback'><i className="arrow fas fa-arrow-left"></i><span>Back to List</span></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}