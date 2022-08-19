import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class YardDebrisRemoval extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Yard Debris Removal</title>
          <meta name="description" content="Happy Wife Junk Removal - Yard Debris Removal" />
        </Helmet>
        <div className='gD services YardDebrisRemoval UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Yard Debris Removal</span>
            </div>
            <div className='gD-body'>
              <span>Happy Wife Junk Service can take away all those annoying items clogging up your house or business. Do you have too much stuff in your garage, yard or business? We can haul it away in record time. The junk is taken from wherever it is on the property and the premises are left broom-clean. We haul away and properly dispose of all yard debris. When we can, we dump yard debris at a vegatative waste facility, helping the environment. We also will take furniture, trash, appliances, scrap metal, swing sets, sheds, carpet and much more. We always recycle or donate what we can. Call today and schedule your way to a happier life!</span>
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