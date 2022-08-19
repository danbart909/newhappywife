import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class Acworth extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Acworth Junk Removal</title>
          <meta name="description" content="Haul away your garbage with the best junk removal company in Acworth, GA" />
        </Helmet>
        <div className='gD areas Acworth UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Acworth</span>
            </div>
            <div className='gD-body'>
              <span>Happy Wife Junk Service is your expert provider of local junk removal services in Acworth, GA. We provide high-quality services to homes and businesses in the area. We make every effort to donate, recycle, or re-purpose our clients' unwanted items so that they do not end up in a landfill. Contact us by phone or complete the contact form to schedule your free junk removal estimate today!</span>
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