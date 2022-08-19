import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div id='f-container'>

        <div id='f-info' className='f-box'>

          <div id='f-info-title' className='f-titles'>
            <span>Our Info</span>
          </div>
          <div id='f-info-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-info-content' className='f-content'>
            <div id='f-info-1' className='f-info-box'>
              <span>Pretty Good Inc, DBA</span>
              <span>Happy Wife Junk Services</span>
            </div>
            <div id='f-info-2' className='f-info-box'>
              <span>1820 Tree Top Way</span>
              <span>Marietta, GA 30062</span>
            </div>
            <div id='f-info-3' className='f-info-box'>
              <span>henry@prettygoodinc.com</span>
              <span>762.217.3303</span>
            </div>
          </div>

        </div>

        <div id='f-services' className='f-box'>

          <div id='f-services-title' className='f-titles'>
            <span>Our Services</span>
          </div>
          <div id='f-services-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-services-content' className='f-content'>
            <Link to='/services/Appliance-Removal'><span>Appliance Removal</span></Link>
            <Link to='/services/Basement-Clean-Out'><span>Basement Clean Out</span></Link>
            <Link to='/services/Garage-Clean-Out'><span>Garage Clean Out</span></Link>
            <Link to='/services/Household-Junk-Removal'><span>Household Junk Removal</span></Link>
            <Link to='/services/Moving-Junk'><span>Moving Junk</span></Link>
            <Link to='/services/Yard-Debris-Removal'><span>Yard Debris Removal</span></Link>
            <Link to='/services/Apartment-Clean-Out'><span>Apartment Clean Out</span></Link>
            <Link to='/services/Office-Junk-Removal'><span>Office Junk Removal</span></Link>
            <Link to='/services/Storage-Unit-Clean-Out'><span>Storage Unit Clean Out</span></Link>
            <Link to='/services/Warehouse-Clean-Out'><span>Warehouse Clean Out</span></Link>
            <Link to='/services/Couch-Removal'><span>Couch Removal</span></Link>
            <Link to='/services/Dresser-Removal'><span>Dresser Removal</span></Link>
            <Link to='/services/Entertainment-Center-Removal'><span>Entertainment Center Removal</span></Link>
            <Link to='/services/Table-and-Chairs-Removal'><span>Table and Chairs Removal</span></Link>
            <Link to='/services/TV-Removal'><span>TV Removal</span></Link>
          </div>

        </div>

        {/* <div id='f-zip' className='f-box'>

          <div id='f-zip-title' className='f-titles'>
            <span>Our Zip Codes</span>
          </div>
          <div id='f-zip-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-zip-content' className='f-content'>
            <span>30060</span>
            <span>30062</span>
            <span>30064</span>
            <span>30066</span>
            <span>30067</span>
            <span>30068</span>
            <span>30080</span>
            <span>30082</span>
            <span>30106</span>
            <span>30126</span>
            <span>30127</span>
          </div>

        </div> */}

        {/* <div id='f-areas' className='f-box'>

          <div id='f-areas-title' className='f-titles'>
            <span>Our Areas</span>
          </div>
          <div id='f-areas-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-areas-content' className='f-content'>
            <span>Cobb County</span>
            <span>East Cobb</span>
            <span>North Cobb</span>
            <span>South Cobb</span>
            <span>West Cobb</span>
          </div>

        </div> */}

        <div id='f-areas' className='f-box'>

          <div id='f-areas-title' className='f-titles'>
            <span>Our Areas</span>
          </div>
          <div id='f-areas-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-areas-content' className='f-content'>
            <Link to='/areas/Acworth-Junk-Removal'><span>Acworth</span></Link>
            <Link to='/areas/Austell-Junk-Removal'><span>Austell</span></Link>
            <Link to='/areas/Kennesaw-Junk-Removal'><span>Kennesaw</span></Link>
            <Link to='/areas/Marietta-Junk-Removal'><span>Marietta</span></Link>
            <Link to='/areas/Mableton-Junk-Removal'><span>Mableton</span></Link>
            <Link to='/areas/PowderSprings-Junk-Removal'><span>Powder Springs</span></Link>
            <Link to='/areas/Roswell-Junk-Removal'><span>Roswell</span></Link>
            <Link to='/areas/Smyrna-Junk-Removal'><span>Smyrna</span></Link>
            <Link to='/areas/Vinings-Junk-Removal'><span>Vinings</span></Link>
            <Link to='/areas/Woodstock-Junk-Removal'><span>Woodstock</span></Link>
          </div>

        </div>

      </div>
    )
  }
}
