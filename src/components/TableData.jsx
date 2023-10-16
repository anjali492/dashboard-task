import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const hrStyle = {
  width: "120%",
};

function TableData() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <p className="fw-light">Product name</p>
        </Col>
        <Col sm={2}>
          <p className="fw-light">Stock</p>
        </Col>
        <Col sm={1}>
          <p className="fw-light">Price</p>
        </Col>
        <Col sm={1}>
          <p className="fw-light">Total sales</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm={8}>
          <h6 className="fw-bold">Abstract 3D</h6>
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </Col>
        <Col sm={2}>
          <p className="pt-1">32 in stock</p>
        </Col>
        <Col sm={1}>
          <p className="pt-1">$45</p>
        </Col>
        <Col sm={1}>
          <p className="pt-1">20</p>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <h6 className="fw-bold">Sarphnens Illustration</h6>
          <p className="fw-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </Col>
        <Col sm={2}>
          <p className="pt-1">15 in stock</p>
        </Col>
        <Col sm={1}>
          <p className="pt-1">$23</p>
        </Col>
        <Col sm={1}>
          <p className="pt-1">18</p>
        </Col>
      </Row>
    </Container>
  );
}

export default TableData;
