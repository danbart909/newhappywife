import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, TabLink, TabContent } from 'react-tabs-redux'

export default class FooterTabs extends Component {
  render() {

    return (
      <Tabs className='footer-tabs'>
        <div id='tab-labels'>
          <TabLink component='div' to='info' className='hvr-trim tab-link'><span>Info</span></TabLink>
          <TabLink component='div' to='services' className='hvr-trim tab-link'><span>Services</span></TabLink>
          <TabLink component='div' to='areas' className='hvr-trim tab-link'><span>Areas</span></TabLink>
        </div>

        <TabContent for="info">
          <div id='footer-info-title' className='footer-title'>Our Info</div>
          <div className='footer-tab-content' id='footer-info-body'>
            <div id='footer-info-1' className='footer-info-box'>
              <span>Pretty Good Inc, DBA</span>
              <span>Happy Wife Junk Services</span>
            </div>
            <div id='footer-info-2' className='footer-info-box'>
              <span>1820 Tree Top Way</span>
              <span>Marietta, GA 30062</span>
            </div>
            <div id='footer-info-3' className='footer-info-box'>
              <span>henry@prettygoodinc.com</span>
              <span>470.304.7632</span>
            </div>
          </div>
        </TabContent>
        <TabContent for="services">
          <div id='footer-services-title' className='footer-title'>Our Services</div>
          <div className='footer-tab-content' id='footer-services-body'>
            <Link to='/services/Appliance-Removal'><span>Appliance Removal</span></Link>
            <Link to='/services/Basement-Clean-Out'><span>Basement Clean Out</span></Link>
            <Link to='/services/Furniture-Junk-Removal'><span>Furniture Junk Removal</span></Link>
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
        </TabContent>
        <TabContent for="areas">
          <div id='footer-areas-title' className='footer-title'>Our Areas</div>
          <div className='footer-tab-content' id='footer-areas-body'>
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
        </TabContent>
      </Tabs>
    )
  }
}