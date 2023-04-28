import React from 'react'
import { Row, Col, Title, C1 } from '../modules/helper'

export default function Virtues() {
  const titles = ['Open and Honest Pricing', 'Cleanliness', 'Trustworthy Service']
  const body1 = ['"You shall have just balances, just weights, a just ephah, and a just hin: I am the LORD your God, who brought you out of the land of Egypt." Leviticus 19:36', '"But everything should be done in a fitting and orderly way." 1 Cor 14:40', '"Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward, You are serving the Lord Christ." Col 3:23-24']
  const body2 = ['We strive to be as straight forward and open as possible. You can trust us to charge only for as much as you use.', "We change into clean sneakers before entering your home. Those sneakers don't touch anything but hardwood, carpet, and concrete.", "You deserve honest service, and we are dedicated to bring that to you. When you open your doors to us, we will go above and beyond to ensure you feel safe."]
  const html = []

  for (let i = 0; i < titles.length; i++) {
    html.push(
      <Col
        flex='1'
        alignItems='center'
        textAlign='center'
        p='2vh 0'
        gap='2vh'
        border='1px solid'
        borderRadius='10px'
        backgroundColor='rgba(0,0,0,.9)'
        color={C1}
      >
        <Title>{titles[i]}</Title>
        <Col gap='2vh' p='1vh 1vh 2vh'>
          <Row>{body1[i]}</Row>
          <hr style={{ width: '60%' }}/>
          <Row>{body2[i]}</Row>
        </Col>
      </Col>)
  }

  return (
    <Row
      m='0 4vh 5vh'
      gap='4vh'
    >
      {html}
    </Row>
  )
}