import React from 'react'
import { Row, Col, Title, C1 } from '../modules/helper'

export default function AboutUs() {
  const titles = ['About Us', 'What We Believe', 'Our Services']
  const body1 = ['A family-owned and operated company, Happy Wife Junk Service was started by a father and son duo, and is a consumer service driven junk removal company based in Marietta, Georgia. We believe passionately that only trustworthy men and women belong in your home. We strive to hire the best and to bring you the best service. At Happy Wife, we pride ourselves on taking care of you.', 'You deserve quality service from anybody you invite into your home. Whether it be landscaping, plumbing, or contractors, you need honest, upstanding men and women. With Happy Wife, junk removal is one less thing you need to worry about, giving you peace of mind. Our junk removal experts will honor your home like you do.', 'Our crews will always strive to serve you, no matter the job. We can do anything, from furniture removal, refrigerator removal, contractor debris clean up, and storage unit clean out, to estate sale clean up and commercial junk removal.']
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
        backgroundColor='rgba(0,0,0,.8)'
        color={C1}
      >
        <Title>{titles[i]}</Title>
        <Row p='0 2vh 2vh'>{body1[i]}</Row>
      </Col>
    )
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