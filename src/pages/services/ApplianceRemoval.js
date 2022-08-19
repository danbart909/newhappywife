import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class ApplianceRemoval extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Appliance Removal</title>
          <meta name="description" content="Happy Wife Junk Removal - Appliance Removal" />
        </Helmet>
        <div className='gD services ApplianceRemoval UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Appliance Removal</span>
            </div>
            <div className='gD-body'>
              <span>Out with the in, in with the new, right? Whether it be a whole warehouse full, or the sofa from the back porch, Happy Wife Junk Service is your go-to place for appliance junk removal. Happy Wife is dedicated to cleanliness. When we come into your abode, we will leave it the way you entrusted it to us. For single items, our single item charge applies! (That’s $99) No surprises here. Happy Wife Junk service makes single items and appliance removal easy and convenient.</span>
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