import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class Marietta extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Marietta Junk Removal</title>
          <meta name="description" content="Haul away your garbage with the best junk removal company in Marietta, GA" />
        </Helmet>
        <div className='gD areas Marietta UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Marietta</span>
            </div>
            <div className='gD-body'>
              <span>Whatever you need removed from your Marietta Georgia location, Happy Wife Junk Service can do the job. We can handle any job, whether big or small. From a single piece of furniture to whole a whole giant load, we can do it. Happy Wife Junk Service also donates and recycles anything we can. Call Happy Wife Junk Service today to schedule.</span>
            </div>
            <div className='gD-go-back'>
              <Link to='/areas' className='areas-goback'><i className="arrow fas fa-arrow-left"></i><span>Back to List</span></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}