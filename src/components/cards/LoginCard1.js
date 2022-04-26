import axios from "axios";
import GithubLogin from "components/login-buttons/GithubLogin";
import GoogleLogin from "components/login-buttons/GoogleLogin";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// Core Components

function LoginCard1() {
  const [emailFocus, setEmailFocus] = React.useState("");
  const [passwordFocus, setPasswordFocus] = React.useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const history = useHistory();

  const signInHandler = (e) => {
    e.preventDefault();
    let data = { email: signInEmail, password: signInPassword };
    console.log(data);
    axios.post("http://localhost:5000/login/", data).then((res) => {
      if (res.data.message) {
        toast.success(res.data.message);
        setSignInEmail("");
        setSignInPassword("");
        localStorage.setItem("token", res.data.token);
        history.push("/argon/account-settings", res.data.token);
      } else {
        toast.error(res.data.error);
      }
    });
  };
  return (
    <>
      <ToastContainer />
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-white pb-5">
          <div className="text-muted text-center mb-3">
            <small>Login with</small>
          </div>
          <div className="btn-wrapper text-center">
            <GithubLogin />
            <GoogleLogin />
          </div>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Or login with credentials</small>
          </div>
          <Form role="form" onSubmit={signInHandler}>
            <FormGroup className={"mb-3 " + emailFocus}>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email"
                  type="email"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  onFocus={() => setEmailFocus("focused")}
                  onBlur={() => setEmailFocus("")}
                ></Input>
              </InputGroup>
            </FormGroup>
            <FormGroup className={passwordFocus}>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Password"
                  type="password"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  onFocus={() => setPasswordFocus("focused")}
                  onBlur={() => setPasswordFocus("")}
                ></Input>
              </InputGroup>
            </FormGroup>
            <div className="custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id=" customCheckLogin2"
                type="checkbox"
              ></input>
              <label
                className="custom-control-label"
                htmlFor=" customCheckLogin2"
              >
                <span className="text-default opacity-5">Remember me</span>
              </label>
            </div>
            <div className="text-center">
              <Button className="my-4" color="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default LoginCard1;
