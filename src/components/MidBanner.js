import React, { Component } from 'react'

export default class MidBanner extends Component {
  render() {
    return (
      <>
        <div id='midbanner-container'>
          <div id='midbanner'>
            <div id='midbanner-header'>
              <span>Call Now</span>
            </div>
            <div id='midbanner-number'>
              <a href='tel:762-217-3303'><span>762.217.3303</span></a>
            </div>
          </div>
        </div>
      </>
    )
  }
}