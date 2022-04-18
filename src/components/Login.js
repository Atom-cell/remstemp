import React from "react";
import "./Signup.css";
import {
  TextField,
  FormControl,
  Input,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailE, setemailE] = React.useState({ error: false, msg: "" });
  const [passwordE, setpasswordE] = React.useState({ error: false, msg: "" });
  const [showPass, setShowPass] = React.useState(false);

  const handleSubmit = (e) => {
    setemailE({ error: false, msg: "" });
    setpasswordE({ error: false, msg: "" });

    if (email === "") {
      setemailE({
        ...emailE,
        error: true,
        msg: "Please enter an Email address.",
      });
    } else if (password === "" || password.length < 8) {
      setpasswordE({
        ...passwordE,
        error: true,
        msg: "Please enter a valid password.",
      });
    }
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
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
  return (
    <div className="container1">
      {/* //////////// Login mai check if already reistered by finding in mongodb
      ///////////////// */}
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
