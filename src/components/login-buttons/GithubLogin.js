import React from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LoginGithub from "react-login-github";

const GithubLogin = () => {
  const history = useHistory();
  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;

  const onSuccess = (response) => {
    console.log(response);
    axios
      .post("http://localhost:5000/authenticate", response)
      .then((res) => {
        console.log(res);
        axios
          .post("http://localhost:5000/login/add", {
            name: res.data.login,
            gitHubId: res.data.id,
            imageUrl: res.data.avatar_url,
          })
          .then((resp) => {
            console.log("token ", resp.data);
            localStorage.setItem("acces_token", resp.data);
          });
      })
      .catch((err) => console.log(err));
  };

  const onFailure = (response) => console.error(response);

  return (
    <LoginGithub
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      className="border-0 bg-transparent"
    >
      <Button className="btn-neutral btn-icon" color="default" href="#pablo">
        <span className="btn-inner--icon">
          <img
            alt="..."
            src={require("assets/img/icons/common/github.svg")}
          ></img>
        </span>
        <span className="btn-inner--text">Github</span>
      </Button>
    </LoginGithub>
  );
};

export default GithubLogin;
