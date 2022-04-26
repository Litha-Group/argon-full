import React from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { useGoogleLogin } from "react-google-login";
// import { useHistory } from "react-router-dom";

const GoogleLogin = () => {
  // const history = useHistory();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const onSuccess = async (res) => {
    // axios
    //   .post("http://localhost:5000/login/add", res.profileObj)
    //   .then((res) => console.log(res))
    //   .then(console.log("Login Success", res.profileObj))
    // .then(history.push("/argon/account-settings", res.profileObj))
    // .then(localStorage.setItem());
    let response = await axios.post(
      "http://localhost:5000/login/add",
      res.profileObj
    );
    console.log("token ",response.data);
    localStorage.setItem("acces_token",response.data)
    console.log("Login Success", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login Failed", res);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <Button
      className="btn-neutral btn-icon"
      color="default"
      href="#pablo"
      onClick={signIn}
    >
      <span className="btn-inner--icon">
        <img
          alt="..."
          src={require("assets/img/icons/common/google.svg")}
        ></img>
      </span>
      <span className="btn-inner--text">Google</span>
    </Button>
  );
};

export default GoogleLogin;
