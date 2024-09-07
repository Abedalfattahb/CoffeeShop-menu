import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarList({ filterbySearch }) {
  const [searchValue, setsearchValue] = useState("");

  const onsearch = (e) => {
    e.preventDefault();  
    filterbySearch(searchValue);
    console.log("Search triggered with value:", searchValue); 
  }

  return (
    <Row>
      <Navbar expand="lg" bg="primary">
        <Container>
          <Navbar.Brand href="#">
            <img className='img-avatar' src='../Alhara.png' alt="Alhara Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              {/* Other Nav items */}
            </Nav>
            <Form className="d-flex">
            <Form.Control
  type="text"
  placeholder="ابحث"
  className="mx-2"
  onChange={(e) => {
    setsearchValue(e.target.value);
    filterbySearch(e.target.value); 
  }}
  value={searchValue}
/>

              <button onClick={onsearch} className='btn-search'>
                ابحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavbarList;
