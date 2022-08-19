import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
      <>
       <div id='aboutus-container'>

        <div id='aboutus' className='aboutus-box'>
          <div id='aboutus-1' className='aboutus-title'>
            <span>About Us</span>
          </div>
          <div className='aboutus-hr'>
            <hr />
          </div>
          <div id='aboutus-2' className='aboutus-text'>
            <span id='about-us-2-span' className='aboutus-text-span'>A family-owned and operated company, Happy Wife Junk Service was started by a father and son duo, and is a consumer service driven junk removal company based in Marietta, Georgia. We believe passionately that only trustworthy men and women belong in your home. We strive to hire the best and to bring you the best service. At Happy Wife, we pride ourselves on taking care of you.</span>
          </div>
        </div>

        <div id='whatwebelieve' className='aboutus-box'>
          <div id='whatwebelieve-1' className='aboutus-title'>
            <span>What We Believe</span>
          </div>
          <div className='aboutus-hr'>
            <hr />
          </div>
          <div id='whatwebelieve-2' className='aboutus-text'>
            <span>You deserve quality service from anybody you invite into your home. Whether it be landscaping, plumbing, or contractors, you need honest, upstanding men and women. With Happy Wife, junk removal is one less thing you need to worry about, giving you peace of mind. Our junk removal experts will honor your home like you do.</span>
          </div>
        </div>

        <div id='ourservices' className='aboutus-box'>
          <div id='ourservices-1' className='aboutus-title'>
            <span>Our Services</span>
          </div>
          <div className='aboutus-hr'>
            <hr />
          </div>
          <div id='ourservices-2' className='aboutus-text'>
            <span>Our crews will always strive to serve you, no matter the job. We can do anything, from furniture removal, refrigerator removal, contractor debris clean up, and storage unit clean out, to estate sale clean up and commercial junk removal.</span>
          </div>
        </div>

        </div> 
      </>
    )
  }
}