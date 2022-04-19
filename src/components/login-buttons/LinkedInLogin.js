import React from "react";
import { Button } from "reactstrap";
// import { useLinkedIn } from "react-linkedin-login-oauth2";

const LinkedInLogin = () => {
//   const { linkedInLogin } = useLinkedIn({
//     clientId: "86vhj2q7ukf83q",
//     redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
//     onSuccess: (code) => {
//       console.log(code);
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//   });
  return (
    //  <Button color="linkedin" size="sm" type="button" onClick={linkedInLogin}>
    <Button color="linkedin" size="sm" type="button" >
      <span className="btn-inner--icon">
        <i className="fab fa-linkedin"></i>
      </span>
    </Button>
  );
};

export default LinkedInLogin;
