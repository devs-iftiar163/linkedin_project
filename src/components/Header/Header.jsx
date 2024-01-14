import { Col, Container, Form, Row } from "react-bootstrap";
import { FaHome, FaLinkedin, FaUsers } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Row>
            {/* Logo and Search */}
            <Col md={4} className="custom-margin">
              <Row className="logo_area">
                <Col md={2}>
                  <div className="logo">
                    <Link to={"/"}>
                      <FaLinkedin />
                    </Link>
                  </div>
                </Col>
                <Col md={10}>
                  <Form.Group>
                    <Form.Control
                      className="bg-color"
                      placeholder="Search"
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            {/* Main Menu */}
            <Col md={8}>
              <Row>
                {/* Menu Items */}
                <Col md={8} className="border-right">
                  <div className="menu-box custom-margin">
                    <ul>
                      <li>
                        <Link to={"/"} className="menu-icons">
                          <FaHome />
                          <p>Home</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} className="menu-icons">
                          <FaUsers />
                          <p>My Network</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} className="menu-icons">
                          <PiBagFill />
                          <p>Jobs</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} className="menu-icons">
                          <BiMessageRoundedDots />
                          <p>Messaging</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} className="menu-icons">
                          <IoMdNotifications />
                          <p>Notification</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} className="user-profile">
                          <img
                            src="https://media.licdn.com/dms/image/D5603AQEDo_Znc_u3Iw/profile-displayphoto-shrink_800_800/0/1683790329166?e=1710979200&v=beta&t=KbqLlqXbc83ksNjynqqEFbUSAmlCn9ORGdBdaC4SfDw"
                            alt=""
                          />
                          <p>Me</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                {/* Sidebar Menu List */}
                <Col md={4} className="custom-margin">
                  <div className="item-sidebar">
                    <ul>
                      <li>
                        <Link to={"#"} className="side-text">
                          <AiOutlineBars />
                          <p>For Business</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={"#"} className="premium-text">
                          <p>
                            Unlock Premium <br />1 month free
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
