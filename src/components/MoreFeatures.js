import React from "react";
import "./MoreFeatures.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import apps from "../img/app-web.PNG";
import time from "../img/timetrack.PNG";
import proj from "../img/projectmanage.PNG";
import bill from "../img/billing.PNG";
import report from "../img/report.PNG";
import features from "./features";

function MoreFeatures() {
  return (
    <div>
      <Navbar expand="sm" className="appbar">
        <Container>
          <Navbar.Brand href="#home" className="rems">
            {features.title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="one">
                Home
              </Nav.Link>
              <Nav.Link
                href="#features"
                style={{ color: "black", textDecoration: "underline" }}
              >
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
          <Col xs={12}>
            <h1 className="featuretitle">Features</h1>
          </Col>
          <Col xs={12} className="ftnames">
            <h5>
              <a href="#">User Manangement</a>
              <FiberManualRecordOutlinedIcon fontSize="small" />
              <a href="#">Activity Monitor</a>
              <FiberManualRecordOutlinedIcon fontSize="small" />
              <a href="#">Dashboard</a>
              <FiberManualRecordOutlinedIcon fontSize="small" />
              <a href="#">Project Management</a>
              <FiberManualRecordOutlinedIcon fontSize="small" />
              <a href="#">Time Tracking</a>
              <FiberManualRecordOutlinedIcon fontSize="small" />
              <a href="#">Calendar & Meetups</a>
              <FiberManualRecordOutlinedIcon fontSize="small" />
              <a href="#">Report</a>
              <FiberManualRecordOutlinedIcon fontSize="small" />
              <a href="#">Billing</a>
              <FiberManualRecordOutlinedIcon fontSize="small" />
            </h5>
          </Col>
        </Row>
      </Container>

      {features.map((ft, index) => {
        return (
          <Container>
            <Row>
              {index % 2 === 0 ? (
                <>
                  <Col xs={12} md={6} className="ft1img">
                    <Image src={ft.img} className="headerimg" />
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="ft1">
                      <h1>{ft.title}</h1>
                      <p>{ft.description}</p>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={12} md={6}>
                    <div className="ft1">
                      <h1>{ft.title}</h1>
                      <p>{ft.description}</p>
                    </div>
                  </Col>
                  <Col xs={12} md={6} className="ft1img">
                    <Image src={ft.img} className="headerimg" />
                  </Col>
                </>
              )}
            </Row>
          </Container>
        );
      })}

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

{
  /* <Container>
        <Row>
          <Col xs={12} md={6} className="ft1img">
            <Image src={apps} className="headerimg" />
          </Col>
          <Col xs={12} md={6}>
            <div className="ft1">
              <h1>Manage all your employees easily</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                corporis praesentium, dolorem exercitationem pariatur doloremque
                eligendi a nobis commodi neque eveniet dolorum vero. Fugiat vel,
                minus nulla voluptas earum quidem?
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="ft1">
              <h1>Monitor the apps your employees uses, in realtime</h1>
              <p>
                Working hard or browsing social media? Always know how your
                employees use their time. Track app and website usage, and
                overall productivity.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="ft1img">
            <Image src={apps} className="headerimg" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="ft1">
              <h1>A comprehensive Dashboard to give you an overview.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                corporis praesentium, dolorem exercitationem pariatur doloremque
                eligendi a nobis commodi neque eveniet dolorum vero. Fugiat vel,
                minus nulla voluptas earum quidem?
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="ft1img">
            <Image src={apps} className="headerimg" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={6} className="ft1img">
            <Image src={apps} className="headerimg" />
          </Col>
          <Col xs={12} md={6}>
            <div className="ft1">
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
      </Container> */
}
