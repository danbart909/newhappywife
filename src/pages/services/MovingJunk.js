import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class MovingJunk extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Moving Junk</title>
          <meta name="description" content="Happy Wife Junk Removal - Moving Junk" />
        </Helmet>
        <div className='gD services MovingJunk UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Moving Junk</span>
            </div>
            <div className='gD-body'>
              <span>Moving? Leave behind all the extra junk, your new home needs new decor anyways. Let Happy Wife Junk Service make your move a little bit easier. Schedule us for moving day, and we can be there to right on time to make a stressful day a little less so. Happy Wife Junk Service does moving junk removal with exuberant passion! Call us now to see what we can do for you.</span>
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