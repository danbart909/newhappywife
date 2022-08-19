import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import $ from 'jquery'
import Acworth from '../images/Acworth.jpg'
import Austell from '../images/Austell.jpg'
import Kennesaw from '../images/Kennesaw.jpg'
import Marietta from '../images/Marietta.jpg'
import Mableton from '../images/Mableton.jpg'
import PowderSprings from '../images/PowderSprings.jpg'
import Roswell from '../images/Roswell.jpg'
import Smyrna from '../images/Smyrna.jpg'
import Vinings from '../images/Vinings.jpg'
import Woodstock from '../images/Woodstock.jpg'

export default function Areas() {
  const [map, setMap] = useState(Marietta)

  return (
    <>
      <Helmet>
        <title>Service Areas</title>
        <meta name="description" content="Happy Wife - Service Areas" />
      </Helmet>
      <div id='area-container'>
        <div id='service-areas'>
          <div className='gD-title'>
            <span>Our Service Areas</span>
          </div>

          <div id='areas-body'>

            <div id='areas-list'>
              <Link className='acworth' to='/areas/Acworth-Junk-Removal'><span>Acworth</span></Link>
              <Link className='austell' to='/areas/Austell-Junk-Removal'><span>Austell</span></Link>
              <Link className='kennesaw' to='/areas/Kennesaw-Junk-Removal'><span>Kennesaw</span></Link>
              <Link className='marietta' to='/areas/Marietta-Junk-Removal'><span>Marietta</span></Link>
              <Link className='mableton' to='/areas/Mableton-Junk-Removal'><span>Mableton</span></Link>
              <Link className='powdersprings' to='/areas/PowderSprings-Junk-Removal'><span>Powder Springs</span></Link>
              <Link className='roswell' to='/areas/Roswell-Junk-Removal'><span>Roswell</span></Link>
              <Link className='smyrna' to='/areas/Smyrna-Junk-Removal'><span>Smyrna</span></Link>
              <Link className='vinings' to='/areas/Vinings-Junk-Removal'><span>Vinings</span></Link>
              <Link className='woodstock' to='/areas/Woodstock-Junk-Removal'><span>Woodstock</span></Link>
            </div>

            <div id='areas-map-container'>
              <div id='areas-map'>{map}</div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}