import React from "react";
import { Button } from "reactstrap";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

const GoogleLogout = () => {
  const history = useHistory();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const onLogoutSuccess = (res) => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("fbssls_442121237680668");
    console.log("Logged out success");
    alert("Logged out successfully");
    history.push("/argon/login-page");
  };
  const onFailure = (res) => {
    console.log("Logout Failed", res);
  };
  const { signOut } = useGoogleLogout({
    onLogoutSuccess,
    onFailure,
    clientId,
  });
  return (
    <Button
      className="btn-neutral btn-icon"
      color="default"
      onClick={signOut}
    >
      <span className="btn-inner--text">Logout</span>
    </Button>
  );
};

export default GoogleLogout;
