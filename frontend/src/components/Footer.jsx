import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>GraffitiResin-Simulation &copy; {currentYear} </p> 
                    <p> Devloped By <a href="https://youssefahmed.com/" target='_blank'>Youssef Ahmed</a></p> 
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer