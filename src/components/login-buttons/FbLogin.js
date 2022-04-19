import React from "react";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Button } from "reactstrap";

const FbLogin = () => {
  const app_id = process.env.REACT_APP_FACEBOOK_APP_ID;

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    // <FacebookLogin
    //   appId={app_id}
    //   autoLoad
    //   callback={responseFacebook}
    //   render={(renderProps) => (
    //   )}
    // />
    <Button
      color="facebook"
      size="sm"
      type="button"
      // onClick={renderProps.onClick}
    >
      <span className="btn-inner--icon">
        <i className="fab fa-facebook"></i>
      </span>
    </Button>
  );
};

export default FbLogin;
