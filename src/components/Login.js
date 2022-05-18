import React from "react";
import "./Signup.css";
import {
  TextField,
  Snackbar,
  Button,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailE, setemailE] = React.useState({ error: false, msg: "" });
  const [passwordE, setpasswordE] = React.useState({ error: false, msg: "" });
  const [showPass, setShowPass] = React.useState(false);
  const [resp, setResponse] = React.useState(9);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    setemailE({ error: false, msg: "" });
    setpasswordE({ error: false, msg: "" });

    if (email === "") {
      setemailE({
        ...emailE,
        error: true,
        msg: "Please enter an Email address.",
      });
    }
    if (password === "" || password.length < 8) {
      setpasswordE({
        ...passwordE,
        error: true,
        msg: "Please enter a valid password.",
      });
    }
    e.preventDefault();
    uploadData();
  };

  const uploadData = async () => {
    if (email && password.length >= 8) {
      if (!emailE.error && !passwordE.error) {
        //alert("dd");
        await axios
          .post("http://localhost:5000/emp/login", {
            email: email,
            password: password,
          })
          .then(function (response) {
            console.log(response);
            setResponse(response.data.msg);
          })
          .catch(function (error) {
            console.log(error);
          });

        setpasswordE({
          ...passwordE,
          error: false,
          msg: "",
        });
        setemailE({
          ...emailE,
          error: false,
          msg: "",
        });

        setEmail("");
        setPassword("");
        setOpen(true);
      }
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

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="container1">
      {resp === 0 ? (
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Invalid Credentials!
          </Alert>
        </Snackbar>
      ) : resp === 1 ? (
        alert("Logged IN")
      ) : null}
      <h2>LOGO</h2>
      <h2>Login to REMS</h2>
      <div className="formcontainer">
        <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            error={emailE.error}
            onChange={(e) => setEmail(e.target.value)}
            id="standard-basic"
            onBlur={checkEmail}
            label="Email"
            variant="outlined"
            helperText={emailE.msg}
            margin="dense"
            type="text"
            className="ip"
          />
          <TextField
            error={passwordE.error}
            onChange={(e) => setPassword(e.target.value)}
            id="standard-basic"
            label="Password"
            variant="outlined"
            margin="dense"
            value={password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={showPassword}>
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            helperText={passwordE.msg}
            type={showPass ? "text" : "password"}
            className="ip"
          />
          <div style={{ width: "100%" }}>
            <Button type="submit" variant="contained" className="submitbtn">
              Login
            </Button>
          </div>
        </form>

        <p className="para">
          <a href="/forget" style={{ fontWeight: "bold" }}>
            Forgot Password?
          </a>
        </p>
      </div>
      <p className="para">
        Not yet Registered? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}

export default Login;
