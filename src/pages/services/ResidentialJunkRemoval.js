import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class ResidentialJunkRemoval extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Residential Junk Removal</title>
          <meta name="description" content="Happy Wife Junk Removal - Residential Junk Removal" />
        </Helmet>
        <div className='gD services ResidentialJunkRemoval UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Residential Junk Removal</span>
            </div>
            <div className='gD-body'>
              <span>Residential junk removal is a breeze with Happy Wife Junk Service. Our customer driven junk service wants your experience to be pleasant and stress free. We haul any kind of junk you need. Happy Wife shows up on time and is a breeze to work with. We always put the needs of our clients first. We are determined to ensure that you feel comfortable and safe inviting us into your home. We always strive to serve you and provide you with a valuable service. Send us a text and we will contact you proptly, and your junk will be gone before you knew it possible.</span>
            </div>
            <div className='gD-list'>
            <span className='gD-list-title'>Things We Take:</span>
              <span>Appliances</span>
              <span>Electronics</span>
              <span>Old Tires</span>
              <span>Carpeting and Rugs</span>
              <span>Ovens</span>
              <span>Furniture</span>
              <span>Yard Debris and Waste</span>
              <span>Mattresses</span>
              <span>Pianos</span>
              <span>Scrap Metals</span>
              <span>Glass</span>
              <span>Hot Tubs</span>
              <span>And Much More!</span>
              <span></span>
            </div>
            <div className='gD-go-back'>
              <Link to='/services' className='services-goback'><i className="arrow fas fa-arrow-left"></i><span>Back to Services</span></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}