import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
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
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

//   const resetHandler = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:5000/reset", { email }).then((res) => {
//       if (res.data.error) {
//         toast.error(res.data.error)
//       }
//     });
//   };
  

  return (
    <>
    <ToastContainer />
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
          
          <Form role="form" >
            <FormGroup className={"mb-3 " + passwordFocus}>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83"></i>
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
            <div className="text-center">
              <Button className="my-4" color="primary" type="submit">
                Send
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default NewPassword;
