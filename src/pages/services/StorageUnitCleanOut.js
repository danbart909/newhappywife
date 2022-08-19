import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class StorageUnitCleanOut extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Storage Unit Clean Out</title>
          <meta name="description" content="Happy Wife Junk Removal - Storage Unit Clean Out" />
        </Helmet>
        <div className='gD services StorageUnitCleanOut UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Storage Unit Clean Out</span>
            </div>
            <div className='gD-body'>
              <span>Those pesky ole’ storage units.... Happy Wife Junk Service can take the hassle away. Whether we can drive up to it, or there is an elevator somewhere along the way, we don’t mind. We know how costly it can be to waste valuable storage unit space, so our storage unit clean out service is here for you. Give us a call today and schedule us now.</span>
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