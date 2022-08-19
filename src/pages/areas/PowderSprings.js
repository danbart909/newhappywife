import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class PowderSprings extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Powder Springs Junk Removal</title>
          <meta name="description" content="Haul away your garbage with the best junk removal company in Powder Springs, GA" />
        </Helmet>
        <div className='gD areas PowderSprings UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Powder Springs</span>
            </div>
            <div className='gD-body'>
              <span>Happy Wife Junk Service is your expert provider of local junk removal services in Powder Springs Georgia. We provide high-quality services to homes and businesses in the area. We make every effort to donate, recycle, or re-purpose our clients' unwanted items so that they do not end up in a landfill. Contact us at 770-873-0803 complete the contact form to schedule your free junk removal estimate today!</span>
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