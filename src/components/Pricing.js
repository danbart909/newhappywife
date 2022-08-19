import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class Pricing extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Pricing Information</title>
          <meta name="description" content="Happy Wife - Pricing Information" />
        </Helmet>
        <div id='pricing-container'>
          <div id='pricing'>
            <div className='gD-title'>
              <span>Our Pricing</span>
            </div>
            <div id='pricing-info'>
              <span>A full load is almost always large enough to clean out the excess junk from a 5 person, 3200 sq ft house!</span>
              <span>We only charge you for what you use!</span>
              <span>A full load is $475</span>
              <span>A 2/3 load is $350</span>
              <span>A 1/3 load is $250</span>
              <span>For single items or a small amount, call or email us for a quote!</span>
            </div>
          </div>
          {/* <div id='pricing-pic'>

          </div> */}
        </div>
      </>
    )
  }
}
