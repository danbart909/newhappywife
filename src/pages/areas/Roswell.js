import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class Roswell extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Roswell Junk Removal</title>
          <meta name="description" content="Haul away your garbage with the best junk removal company in Roswell, GA" />
        </Helmet>
        <div className='gD areas Roswell UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Roswell</span>
            </div>
            <div className='gD-body'>
              <span>We offer great removal and hauling rates to the people of Roswell Georgia. We have low prices and timely, professional service. Whether you're a business in Roswell, a non-profit, a home owner, or a renter, we can help you with your Roswell junk removal needs. We do small one-time loads as well as regular recurring service. If your closets are overflowing with junk, your store has regular hauling needs, or you've just completed landscaping and have a ton of yard waste that needs to be trashed, we can help.</span>
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