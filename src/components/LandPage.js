// import React from "react";
// import "./LandPage.css";
// import AppBar from "@mui/material/AppBar";
// import { Grid } from "@mui/material";
// import Toolbar from "@mui/material/Toolbar";
// import Box from "@mui/material/Box";
// // import Button from "@mui/material/Button";
// import { Button } from "react-bootstrap";

// function LandPage() {
//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar
//           style={{ background: "#e1c5ff" }}
//           className="appbar"
//           position="static"
//         >
//           <Toolbar>
//             <Grid container spacing={3}>
//               <Grid item xs>
//                 <h2>REMS</h2>
//               </Grid>
//               <Grid item>
//                 <h3>
//                   <a href="/"> Home</a>
//                 </h3>
//               </Grid>
//               <Grid item>
//                 <h3>Features</h3>
//               </Grid>
//               <Grid item>
//                 <h3>Download</h3>
//               </Grid>
//               <Grid item>
//                 <h3>Login</h3>
//               </Grid>
//               <Grid item>
//                 <Button variant="primary">Primary</Button>
//               </Grid>
//             </Grid>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </>
//   );
// }

// export default LandPage;

import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import img from "../img/undraw_Dev_focus_re_6iwt.png";

import "./LandPage.css";
function LandPage() {
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#download">Download</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
            <button className="signbtn">Get Started</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col xs={6} md={6}>
            <div className="header-text">
              <h1>100% free employee monitoring and timesheets</h1>
              <h2>with REMS</h2>
              <p>
                Boost your team productivity by 2x with an intelligent
                monitoring system
              </p>
            </div>
            <div className="header-features">
              <h4>Activity Monitoring</h4>
              <h4>Time Tracking</h4>
              <h4>Project Management</h4>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={img} className="headerimg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandPage;
