import React, { Component } from 'react'

export default class Virtues extends Component {
  render() {
    return (
      <>
        <div id='virtues'>

          <div id='virtues-header'>
            <span>Our Virtues</span>
          </div>

          <div id='virtues-body'>

            <div id='virtues-1' className='virtue'>
              <div id='virtues-title-1' className='virtues-title'>
                <span>Open and Honest Pricing</span>
              </div>
              <div className='virtues-hr'>
                <hr />
              </div>
              <div id='virtues-text-1' className='virtues-text'>
                <span>"You shall have just balances, just weights, a just ephah, and a just hin: I am the LORD your God, who brought you out of the land of Egypt." Leviticus 19:36</span>
                <span>We strive to be as straight forward and open as possible. You can trust us to charge only for as much as you use.</span>
              </div>
            </div>

            <div id='virtues-2' className='virtue'>
              <div id='virtues-title-2' className='virtues-title'>
                <span>Cleanliness</span>
              </div>
              <div className='virtues-hr'>
                <hr />
              </div>
              <div id='virtues-text-2' className='virtues-text'>
                <span>"But everything should be done in a fitting and orderly way." 1 Cor 14:40</span>
                <span>We change into clean sneakers before entering your home. Those sneakers don't touch anything but hardwood, carpet, and concrete.</span>
              </div>
            </div>

            <div id='virtues-3' className='virtue'>
              <div id='virtues-title-3' className='virtues-title'>
                <span>Trustworthy Service</span>
              </div>
              <div className='virtues-hr'>
                <hr />
              </div>
              <div id='virtues-text-3' className='virtues-text'>
                <span>"Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward, You are serving the Lord Christ." Col 3:23-24</span>
                <span>You deserve honest service, and we are dedicated to bring that to you. When you open your doors to us, we will go above and beyond to ensure you feel safe.</span>
              </div>
            </div>

          </div>

        </div>
      </>
    )
  }
}
