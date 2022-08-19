import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class GrillRemoval extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Grill Removal</title>
          <meta name="description" content="Happy Wife Junk Removal - Grill Removal" />
        </Helmet>
        <div className='gD services GrillRemoval UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Grill Removal</span>
            </div>
            <div className='gD-body'>
              <span>Grill Removal is a breeze with Happy Wife Junk Service. Our customer driven junk service wants your experience to be pleasant and stress free. We haul any kind of junk you need. Happy Wife shows up on time and is a breeze to work with. We always put the needs of our clients first. We are determined to ensure that you feel comfortable and safe inviting us into your home. We always strive to serve you and provide you with a valuable service. Send us a text and we will contact you proptly, and your junk will be gone before you knew it possible.</span>
            </div>
            <div className='gD-go-back'>
              <Link to='/services' className='services-goback'><i className="arrow fas fa-arrow-left"></i><span>Back to List</span></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}