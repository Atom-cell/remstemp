import React from "react";
import "./ResetPassword.css";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { Container, Row, Col, Image } from "react-bootstrap";

function ResetPassword() {
  const [email, setEmail] = React.useState("");
  const [emailE, setemailE] = React.useState({ error: false, msg: "" });
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    setemailE({ error: false, msg: "" });

    if (email === "") {
      setemailE({
        ...emailE,
        error: true,
        msg: "Please enter an Email address.",
      });
    }
    e.preventDefault();
    if (email) {
      console.log(email);
      setOpen(true);
      setEmail("");
    }
  };

  const checkEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setemailE({ error: false, msg: "" });
    } else {
      setemailE({
        ...emailE,
        error: true,
        msg: "Please enter a valid Email address.",
      });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="resetWrapper">
      <Button>Logo</Button>
      <h2 className="title">Reset Account Password</h2>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Please check your email.
        </Alert>
      </Snackbar>
      <Row>
        <Col xs={12}>
          <form
            action=""
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            className="resetForm"
            // style={{ marginLeft: "20rem", marginRight: "20rem" }}
          >
            <p>Enter email here</p>
            <TextField
              error={emailE.error}
              onChange={(e) => setEmail(e.target.value)}
              id="standard-basic"
              onBlur={checkEmail}
              label="Email"
              variant="outlined"
              value={email}
              helperText={emailE.msg}
              margin="dense"
              type="text"
              className="ipField"
            />
            <div>
              <Button type="submit" variant="contained" className="submitbtn">
                Reset Account Password
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default ResetPassword;
