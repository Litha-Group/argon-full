// import axios from "axios";
import React from "react";
// import InstagramLogin from "react-instagram-login";
import { Button } from "reactstrap";

const InstaLogin = () => {
  // const app_id = process.env.REACT_APP_INSTARAM_APP_ID;
  // const redirect_uri = "https://localhost:3005";
  // const onFailure = (response) => {
  //   console.log(response);
  // };
  // const onSuccess = async () => {
  //   let res = await axios.get(
  //     `https://api.instagram.com/oauth/authorize?client_id=${app_id}&redirect_uri=https://localhost:3005&scope=user_profile,user_media&response_type=code`
  //   );
  //   console.log(res);
  // };
  return (
    //   <InstagramLogin
    //     clientId={app_id}
    //     buttonText="Login"
    //     onSuccess={onSuccess}
    //     onFailure={onFailure}
    //     implicitAuth
    //  / >

    <Button color="instagram" size="sm" type="button">
      <span className="btn-inner--icon">
        <i className="fab fa-instagram"></i>
      </span>
    </Button>
  );
};

export default InstaLogin;
