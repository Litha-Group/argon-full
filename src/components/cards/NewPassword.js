import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import DemoFooter from "components/footers/DemoFooter.js";
import { useParams, useHistory } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  Container,
  Col,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// Core Components

function NewPassword() {
  const [passwordFocus, setPasswordFocus] = useState("");
  const [password2Focus, setPassword2Focus] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const history = useHistory();
  const { email, token } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error(
        "Password mismatch. Please check the password and try again."
      );
      return;
    }
    let data = { password, email, token };
    axios
      .post("http://localhost:5000/reset/create-password", data)
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.error);
        } else {
          toast.success(res.data.message);
          setPassword("");
          setPassword2("");
        }
      });
  };

  return (
    <>
      <ToastContainer />
      {/* <DemoNavbar type="transparent" /> */}
      <div className="wrapper">
        <div className="page-header bg-default">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/reset.svg") + ")",
            }}
          ></div>
          <Container>
            <Col className="mx-auto" lg="5" md="8">
              <Card className="bg-secondary shadow border-0">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/ill/bg5-1.svg")}
                  ></CardImg>
                  <CardTitle className="text-center" tag="h4">
                    Create new password
                  </CardTitle>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <Form role="form" onSubmit={submitHandler}>
                    <FormGroup className={"mb-3 " + passwordFocus}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="New Password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={() => setPasswordFocus("focused")}
                          onBlur={() => setPasswordFocus("")}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={"mb-3 " + password2Focus}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Re-enter New Password"
                          type="password"
                          value={password2}
                          onChange={(e) => setPassword2(e.target.value)}
                          onFocus={() => setPassword2Focus("focused")}
                          onBlur={() => setPassword2Focus("")}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default NewPassword;
