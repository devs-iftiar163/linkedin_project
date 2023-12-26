import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <h1>I am from Header</h1>
        <Container>
          <Row>
            <Col md={6}>
              <h2>The header Area</h2>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
