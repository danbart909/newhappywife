import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class OfficeJunkRemoval extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Office Junk Removal</title>
          <meta name="description" content="Happy Wife Junk Removal - Office Junk Removal" />
        </Helmet>
        <div className='gD services OfficeJunkRemoval UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Office Junk Removal</span>
            </div>
            <div className='gD-body'>
              <span>Business is serious and you are upgrading the ergonomic environment around the office. Or something else. Happy Wife Junk Service excels at serving commercial clients. We know how schedules can be tight, and deadlines need to be met, that’s why we are dedicated to making sure your changes are done on time and professionally. Schedule us now and let Happy Wife Junk Service serve your office space junk removal needs.</span>
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