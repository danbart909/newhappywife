import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class FurnitureJunkRemoval extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Furniture Junk Removal</title>
          <meta name="description" content="Happy Wife Junk Removal - Furniture Junk Removal" />
        </Helmet>
        <div className='gD services FurnitureJunkRemoval UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Furniture Junk Removal</span>
            </div>
            <div className='gD-body'>
              <span>Out with the in, in with the new, right? Or maybe its just time to let go of the couch Purry scratched up. Whether it be a whole warehouse full, or the sofa from the back porch, Happy Wife Junk Service is your go-to place for furniture junk removal. Happy Wife is dedicated to cleanliness. When we come into your abode, we will leave it the way you entrusted it to us. For single items, our single item charge applies! (That’s $99) No surprises here. Happy Wife Junk service makes single items and furniture removal easy and convenient.</span>
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