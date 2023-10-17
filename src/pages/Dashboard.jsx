import React from "react";

import { Navbar, Card, Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import CanvasJSReact from "@canvasjs/react-charts";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaDollarSign,
  FaMapMarkedAlt,
  FaSearchDollar,
  FaFunnelDollar,
  FaSearch,
  FaElementor,
  FaCoffee,
  FaLock,
  FaBalanceScale,
  FaWallet,
} from "react-icons/fa";
import SearchBox from "../components/SearchBox";
import TableData from "../components/TableData";

const hrStyle = {
  width: "105%",
};
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
  const options = {
    title: {
      text: "Overview",
     
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          { label: "jan", y: 17 },
          { label: "Feb", y: 12 },
          { label: "Mar", y: 25 },
          { label: "April", y:18 },
          { label: "May", y: 20 },
          { label: "june", y: 8 },
          { label: "july", y: 20 },
          { label: "Aug", y: 29 },
          { label: "sep", y: 27 },
          { label: "oct", y: 25 },
          { label: "Nov", y: 23 },
          { label: "Dec", y: 25 },
        ],
      },
    ],
  };
  const option = {
    animationEnabled: true,
    title: {
      text: "Customers"
    },
    subtitles: [
      {
        text: "65% Total New Customers",
          verticalAlign: "center",
        fontSize: 14,
        // dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        // showInLegend: true,
        // indexLabel: "{name}: {y}",
        // yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "", y: 5 },
          { name: "", y: 31 },
          { name: "", y: 40 },
        ],
      },
    ],
  };


  const cardsData = [
    {
      icon: FaDollarSign,
      color: "#3498db",
      title: "$198k ",
      text: "37.8% this month",
      abc:"Earning"
    },
    {
      icon:FaElementor,
      color: "#e74c3c",
      title: "$2.4k",
      text: "2% this month",
      abc:"Orders"
    },
    {
      icon: FaWallet,
      color: "#27ae60",
      title: "$2.4k",
      text: "2% this month",
      abc:"Balance"
    },
    {
      icon: FaLock,
      color: "#f39c12",
      title: "$89k",
      text: "11% this week",
      abc:"Total Sales"
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
                        {data.abc}
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
              <Card.Body>
                {" "}
                <CanvasJSChart
                  options={options}
                  // onRef={(ref) => (this.chart = ref)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Body>
                <CanvasJSChart
                  options={option}
                  /* onRef={ref => this.chart = ref} */
                />
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
