import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";

function GAD7() {
  React.useEffect(() => {
    document.body.classList.add("nlpjs");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("nlpjs");
    };
  });
  return (
    <>
      <DemoNavbar type="dark" />
      <div className="wrapper">
        <div className="page-header error-page">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/ill/404.svg") + ")",
            }}
          ></div>
          <Container>
            <Row>
              <Col className="text-center" md="12">
                <h1>GAD7</h1>
                <p className="lead">Type your message here</p>
                <div id="chat"></div>
      <form id="chatbotForm">
          <input type="text" id="chatInput" />
          <input type="submit" id="chatSubmit" value="send" />
      </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default GAD7;
