import React from 'react'
import { Container, Nav , Navbar } from 'react-bootstrap'
import './MyNav.css'
import ReactStars from "react-rating-stars-component";
const MyNav = ( {handleTitle , handleRate}) => {
  const ratingChanged = (newRating) => {
    handleRate(newRating)
  };
  const handleChange=(e)=>{
    handleTitle(e.target.value)

  }
  return (
    <div>
        <Navbar bg="black" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <input type="text" placeholder ='enter your search' className='my-input'
    onChange={handleChange}
    />
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={29}
    activeColor="purple"
  />
    </Container>
  </Navbar>
    </div>
  )
}

export default MyNav