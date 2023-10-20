import {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle, Download } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

const toRotate = ["János", "Web Developer"];

function Banner() {

  const [index, setIndex] = useState(0);
  const [jobTitle, setJobTitle] = useState('');
  const [lettersToShow, setLettersToShow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lettersToShow < toRotate[index].length) {
        setLettersToShow((prevLetters) => prevLetters + 1);
      } else {
        clearInterval(interval); // Megállítjuk az időzített intervallumot, ha az összes betűt megjelenítettük
        setTimeout(() => {
          setLettersToShow(0); // Várunk egy rövid időt, majd elkezdjük az új cím betűinek megjelenítését
          setIndex((prevIndex) => (prevIndex + 1) % toRotate.length);
        }, 2000); // Várunk 2 másodpercet, majd váltunk az új címre
      }
    }, 100); // Minden 100 milliszekundumban megjelenítünk egy betűt

    return () => clearInterval(interval);
  }, [index, lettersToShow]);

  useEffect(() => {
    setJobTitle(toRotate[index].slice(0, lettersToShow));
  }, [lettersToShow, index]);


  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi I'm, `} <span className='wrap'>{jobTitle}</span></h1>
            <p>Fusce blandit sagittis purus sit amet rhoncus. Nulla eu maximus elit. Sed luctus diam quis tincidunt gravida. Aliquam lacinia tempor metus id placerat. Nam ultrices erat nec mauris fermentum viverra</p>
            <div className='d-flex text-center me-2'>
              {/* <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button> */}
              <a href="/" className='border p-2'> Download CV  <Download className='ms-2'/></a>
            </div>
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
