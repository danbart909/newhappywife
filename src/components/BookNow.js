import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class BookNow extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Book Now - Booking Form</title>
          <meta name="description" content="Happy Wife - Book Now - Booking Form" />
        </Helmet>
        <div id='booknow-container'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Book Now</span>
            </div>
            <div id='booknow-header'>
              <span>Please complete the form below and we will reply promptly. Let us know how we can best serve you.</span>
            </div>
            <div id='booknow-form-container'>
              <form id='booknow-contact-form' action="https://formspree.io/f/mpzbword" method="POST">
                <fieldset id='booknow-fieldset'>
                  <legend className='booknow-fieldset-legend hidden'>Contact Form / Request a Timeslot</legend>
                  <input id='booknow-nameinput' className='booknow-inputs' type='text' name='name' placeholder='Name' required />
                  <input id='booknow-emailinput' className='booknow-inputs' type='text' name='email' placeholder='Email' required />
                  <input id='booknow-phoneinput' className='booknow-inputs' type='text' name='phone' placeholder='Phone' required />
                  <textarea id='booknow-contentinput' name='content' placeholder="Please tell us what time you'd like us to haul your stuff, as well as what it is we are hauling" required defaultValue={""} />
                  <input id='booknow-submit' type='submit' name='send' value='Send Email' />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}