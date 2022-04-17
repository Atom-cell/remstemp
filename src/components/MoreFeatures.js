import React from "react";
import "./MoreFeatures.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import apps from "../img/app-web.PNG";
import time from "../img/timetrack.PNG";
import proj from "../img/projectmanage.PNG";

function MoreFeatures() {
  return (
    <div>
      <Navbar expand="sm" className="appbar">
        <Container>
          <Navbar.Brand href="#home" className="rems">
            REMS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="one">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="two">
                Features
              </Nav.Link>
              <Nav.Link href="#download" className="three">
                Download
              </Nav.Link>
              <Nav.Link href="#login" className="four">
                Login
              </Nav.Link>
            </Nav>
            <Button className="signbtn" type="button">
              Get Started
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Feature 1 */}
      <Container>
        <Row>
          <Col xs={12} md={6} className="ft1img">
            <Image src={apps} className="headerimg" />
          </Col>
          <Col xs={12} md={6}>
            <div className="ft1">
              <h1>01</h1>
              <h1>Monitor the apps your employees uses, in realtime</h1>
              <p>
                Working hard or browsing social media? Always know how your
                employees use their time. Track app and website usage, and
                overall productivity.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Feature 2 */}
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="ft1">
              <h1>02</h1>
              <h1>Keep track of the time used to do the work.</h1>
              <p>
                Want to pay according to the time used to the work? Want to pay
                fairly? Time Tracking will help you do so.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="ft1img">
            <Image src={time} className="headerimg" />
          </Col>
        </Row>
      </Container>

      {/* Feature 3 */}
      <Container>
        <Row>
          <Col xs={12} md={6} className="ft1img">
            <Image src={proj} className="headerimg" />
          </Col>
          <Col xs={12} md={6}>
            <div className="ft1">
              <h1>03</h1>
              <h1>Manage and assign work</h1>
              <p>
                Keep an eye on all the projects underway. Create projects,
                Manage projects, Assign projects in Project Management
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <>
        <Row style={{ backgroundColor: "red" }}>
          <Col xs={12}>
            <div className="footer">
              <h1>Start monitoring your remote employees now!</h1>
              <Button>Creat Free Account Now</Button>
            </div>
          </Col>
        </Row>
      </>
    </div>
  );
}

export default MoreFeatures;