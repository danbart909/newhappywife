import React from 'react'
import { Row, Col, Title, TitleBox, C1, C2 } from '../modules/helper'
import { Helmet } from 'react-helmet'
import carry2 from '../images/carry2.jpg'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services</title>
        <meta name="description" content="Happy Wife - Our Services" />
      </Helmet>
      <Col
        alignItems='center'
        textAlign='center'
        style={{
          backgroundImage: `url(${carry2})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
        color={C1}
      >
      
        <TitleBox>Our Services</TitleBox>

        <Row
          m='0 7vw'
          p='1vw 6vw'
          backgroundColor='rgba(0,0,0,.9)'
          border='1px solid'
          borderRadius='10px'
        >Happy Wife Junk Service can haul just about any kind of junk you can imagine. From large mirrors and windows, to old planks of wood, to bulky mattresses and couches, we've got you covered. The only junk we can't handle are hazardous materials, since they require a specialized form of disposal. We break up our junk disposal options into two main categories: Commercial junk and Residential junk removal</Row>

        <Row
          p='3vw 0'
          // border='1px solid'
        >
          <Col
            m='4vh 2vw'
            p='2vw'
            gap='3vw'
            alignItems='center'
            backgroundColor='rgba(0,0,0,.9)'
            border='1px solid'
            borderRadius='10px'
          >
            <Title>Commercial Junk Removal</Title>
            <Row>Construction sites, office spaces, and warehouses can benefit greatly from hiring professional junk haulers to handle their garbage or unwanted materials. It's important for businesses to keep their office spaces looking uncluttered and tidy, and it can be a challenge to clear out rooms full of old computers, monitors, tables, office furnishings, etc. Construction crews will rest easy knowing that their accumulated debris will not overflow into neighboring yards, which could warrant hefty fines.</Row>
          </Col>

          <Col
            m='4vh 2vw'
            p='2vw'
            gap='3vw'
            alignItems='center'
            backgroundColor='rgba(0,0,0,.9)'
            border='1px solid'
            borderRadius='10px'
          >
            <Title>Residential Junk Removal</Title>
            <Row>We do our best to keep our homes clean and tidy, but it's common for junk to accumulate in the storage spaces of our homes. Old exercise equipment, not quite broken tv sets from the 80s, boxes of clothes that we've given up finding an occasion to wear; it's in these moments that our junk removal crew will be there to give you a hand. The experts at Happy Wife Junk Removal are always sure to treat your home with respect and will never track dirt into your living spaces.
            </Row>
          </Col>
        </Row>

      </Col>
    </>
  )
}







{/* <div id='residential' className='service-box'>
  <div id='residential-title' className='service-title'>
    <Link to='/services/Residential-Junk-Removal'><span>Residential Junk Removal</span></Link>
  </div>
  <div id='residential-list' className='service-list'>
    <Link to='/services/Appliance-Removal'><span>Appliance Removal</span></Link>
    <Link to='/services/Basement-Clean-Out'><span>Basement Clean Out</span></Link>
    <Link to='/services/Garage-Clean-Out'><span>Garage Clean Out</span></Link>
    <Link to='/services/Household-Junk-Removal'><span>Household Junk Removal</span></Link>
    <Link to='/services/Moving-Junk'><span>Moving Junk</span></Link>
    <Link to='/services/Oven-Removal'><span>Oven Removal</span></Link>
    <Link to='/services/Yard-Debris-Removal'><span>Yard Debris Removal</span></Link>
  </div>
</div>
<div id='commercial' className='service-box'>
  <div id='commercial-title' className='service-title'>
    <Link to='/services/Commercial-Junk-Removal'><span>Commercial Junk Removal</span></Link>
  </div>
  <div id='commercial-list' className='service-list'>
    <Link to='/services/Apartment-Clean-Out'><span>Apartment Clean Out</span></Link>
    <Link to='/services/Office-Junk-Removal'><span>Office Junk Removal</span></Link>
    <Link to='/services/Storage-Unit-Clean-Out'><span>Storage Unit Clean Out</span></Link>
    <Link to='/services/Warehouse-Clean-Out'><span>Warehouse Clean Out</span></Link>
  </div>
</div>
<div id='furniture' className='service-box'>
  <div id='furniture-title' className='service-title'>
    <Link to='/services/Furniture-Junk-Removal'><span>Furniture Junk Removal</span></Link>
  </div>
  <div id='furniture-list' className='service-list'>
    <Link to='/services/Couch-Removal'><span>Couch Removal</span></Link>
    <Link to='/services/Dresser-Removal'><span>Dresser Removal</span></Link>
    <Link to='/services/Entertainment-Center-Removal'><span>Entertainment Center Removal</span></Link>
    <Link to='/services/Table-and-Chairs-Removal'><span>Table and Chairs Removal</span></Link>
    <Link to='/services/TV-Removal'><span>TV Removal</span></Link>
  </div>
</div> */}