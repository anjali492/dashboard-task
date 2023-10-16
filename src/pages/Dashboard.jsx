import React from "react";

import { Navbar, Card, Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkedAlt,
  FaSearchDollar,
  FaFunnelDollar,
  FaSearch,
} from "react-icons/fa";
import SearchBox from "../components/SearchBox";
import TableData from "../components/TableData";

const hrStyle = {
  width: "105%",
};

const Dashboard = () => {
  const cardsData = [
    {
      icon: FaUser,
      color: "#3498db",
      title: "User 1",
      text: "This is user 1's data.",
    },
    {
      icon: FaEnvelope,
      color: "#e74c3c",
      title: "User 2",
      text: "This is user 2's data.",
    },
    {
      icon: FaPhone,
      color: "#27ae60",
      title: "User 3",
      text: "This is user 3's data.",
    },
    {
      icon: FaMapMarkedAlt,
      color: "#f39c12",
      title: "User 4",
      text: "This is user 4's data.",
    },
  ];

  let dropdownButton = {
    padding: "0",
    backgroundColor: "#dee2e6 !important",
    marginTop: "8px",
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          {cardsData.map((data, index) => (
            <Col key={index}>
              <Card className="custom-card">
                <Card.Body>
                  <Container>
                    <Row>
                      <Col>
                        {" "}
                        <div
                          className="circle"
                          style={{ backgroundColor: data.color }}
                        >
                          {React.createElement(data.icon, {
                            size: 50,
                            color: "white",
                          })}
                        </div>
                      </Col>
                      <Col>
                        <div className="top-right-center">
                          <Card.Title className="card-title">
                            {data.title}
                          </Card.Title>
                          <Card.Text className="card-text">
                            {data.text}
                          </Card.Text>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Body></Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                nobis quod perferendis cum voluptates incidunt eos quaerat dicta
                velit nam earum rerum, vero dolorum iure labore modi. Iure at
                quibusdam aspernatur magnam fugit quam nulla atque praesentium
                voluptatibus expedita in deserunt blanditiis ad nesciunt, error,
                beatae accusantium explicabo veritatis. Deleniti reiciendis rem
                sed placeat enim dolorem, impedit, sit suscipit? At repellat
                consequatur fugit.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Card>
          <Card.Body>
            <Row>
              <Col sm={8}>
                <h3>Product Sell</h3>
              </Col>
              <Col sm={2}>
                <SearchBox />
              </Col>
              <Col sm={2}>
                <DropdownButton
                  id="dropdown-basic-button btn-block"
                  title="Last 30 days data"
                  style={dropdownButton}
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
            <Row className="mt-3">
              <hr />
              <Col>
                <TableData />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
