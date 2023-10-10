import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

function Banner() {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi I'm Janos`} <span className='wrap'>web developer</span></h1>
            <p>Fusce blandit sagittis purus sit amet rhoncus. Nulla eu maximus elit. Sed luctus diam quis tincidunt gravida. Aliquam lacinia tempor metus id placerat. Nam ultrices erat nec mauris fermentum viverra</p>
            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='header-img'/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
