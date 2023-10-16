import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FormControl } from "react-bootstrap";

import { FaHandPaper, FaSearch } from "react-icons/fa";

let iconStyles = { color: "#e89c4b", fontSize: "1em" };

let iconSearch = {
  position: "absolute",
  right: "265px",
  top: "45%",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          Hello Shahrukh{" "}
          <span style={iconStyles}>
            <FaHandPaper />
          </span>
          ,
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <CustomSearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CustomSearchForm() {
  return (
    <form className="custom-search-form">
      <input
        type="text"
        className="form-control custom-search-input"
        placeholder="Search"
      />
    </form>
  );
}

export default BasicExample;
