import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import GoogleLogout from "components/logout-buttons/GoogleLogout";

function DemoNavbar(props) {
  const [collapseOpen, toggleCollapse] = React.useState(false);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = () => {
  //     fetch("http://localhost:5000/auth/login/success", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authentication has been failed!");
  //       })
  //       .then((resObject) => {
  //         setUser(resObject.user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/argon/index" tag={Link}>
            <img alt="..." src={require("assets/img/brand/white.png")}></img>
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img
                      alt="..."
                      src={require("assets/img/brand/blue.png")}
                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            >
              <UncontrolledDropdown nav>
                <DropdownToggle
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  tag={NavLink}
                >
                  <i className="ni ni-ui-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">Elements</span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-xl">
                  <div className="dropdown-menu-inner">
                    <Media
                      className="d-flex align-items-center"
                      to="/argon/index"
                      tag={Link}
                    >
                      <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                        <i className="ni ni-spaceship"></i>
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          Elements
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn how to use compiling Scss, change brand colors
                          and more.
                        </p>
                      </Media>
                    </Media>
                    <Media
                      className="d-flex align-items-center"
                      to="/argon/presentation"
                      tag={Link}
                    >
                      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        <i className="ni ni-palette"></i>
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          Presentation
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn more about colors, typography, icons and the
                          grid system we used for .
                        </p>
                      </Media>
                    </Media>
                  </div>
                  <div className="dropdown-menu-footer">
                    <DropdownItem href="https://www.creative-tim.com/learning-lab/reactstrap/overview/argon-design-system">
                      <i className="ni ni-atom"></i> Getting Started
                    </DropdownItem>
                    <DropdownItem href="https://www.creative-tim.com/learning-lab/reactstrap/colors/argon-design-system">
                      <i className="ni ni-ui-04"></i> Foundation
                    </DropdownItem>
                    <DropdownItem href="https://www.creative-tim.com/learning-lab/reactstrap/core-accordions/argon-design-system">
                      <i className="ni ni-archive-2"></i> Components
                    </DropdownItem>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-app d-lg-none"></i>
                  <span className="nav-link-inner--text">Design Blocks</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem tag={Link} to="/argon/sections#headers">
                    <i className="ni ni-album-2 text-info"></i>
                    Headers
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/argon/sections#features">
                    <i className="ni ni-settings text-danger"></i>
                    Features
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/argon/sections#blogs">
                    <i className="ni ni-align-left-2 text-primary"></i>
                    Blogs
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/argon/sections#teams">
                    <i className="ni ni-user-run text-danger"></i>
                    Teams
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/argon/sections#projects">
                    <i className="ni ni-paper-diploma text-purple"></i>
                    Projects
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/argon/sections#pricing">
                    <i className="ni ni-money-coins text-pink"></i>
                    Pricing
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/argon/sections#testimonials">
                    <i className="ni ni-chat-round text-muted"></i>
                    Testimonials
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/argon/sections#contact-us">
                    <i className="ni ni-mobile-button text-success"></i>
                    Contact Us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/argon/sections#tables">
                    <i className="ni ni-chart-bar-32 text-default"></i>
                    Tables
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/argon/sections#accordion">
                    <i className="ni ni-collection text-yellow"></i>
                    Accordion
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-single-copy-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">Examples</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/argon/about-us" tag={Link}>
                    <i className="ni ni-tie-bow text-warning"></i>
                    About-us
                  </DropdownItem>
                  <DropdownItem to="/argon/blog-post" tag={Link}>
                    <i className="ni ni-align-center text-info"></i>
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to="/argon/blog-posts" tag={Link}>
                    <i className="ni ni-chart-bar-32 text-yellow"></i>
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to="/argon/contact-us" tag={Link}>
                    <i className="ni ni-square-pin text-danger"></i>
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/argon/landing-page" tag={Link}>
                    <i className="ni ni-planet text-purple"></i>
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to="/argon/pricing-page" tag={Link}>
                    <i className="ni ni-money-coins text-success"></i>
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/argon/ecommerce" tag={Link}>
                    <i className="ni ni-box-2 text-pink"></i>
                    Ecommerce Page
                  </DropdownItem>
                  <DropdownItem to="/argon/product-page" tag={Link}>
                    <i className="ni ni-bag-17 text-primary"></i>
                    Product Page
                  </DropdownItem>
                  <DropdownItem to="/argon/profile-page" tag={Link}>
                    <i className="ni ni-circle-08 text-info"></i>
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to="/argon/error" tag={Link}>
                    <i className="ni ni-button-power text-warning"></i>
                    404 Error Page
                  </DropdownItem>
                  <DropdownItem to="/argon/error-500" tag={Link}>
                    <i className="ni ni-ungroup text-yellow"></i>
                    500 Error Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-tablet-button d-lg-none"></i>
                  <span className="nav-link-inner--text">App Pages</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/argon/account-settings" tag={Link}>
                    <i className="ni ni-lock-circle-open text-muted"></i>
                    Account Settings
                  </DropdownItem>
                  <DropdownItem to="/argon/login-page" tag={Link}>
                    <i className="ni ni-tv-2 text-danger"></i>
                    Login Page
                  </DropdownItem>
                  <DropdownItem to="/argon/register-page" tag={Link}>
                    <i className="ni ni-air-baloon text-pink"></i>
                    Register Page
                  </DropdownItem>
                  <DropdownItem to="/argon/reset-page" tag={Link}>
                    <i className="ni ni-atom text-info"></i>
                    Reset Page
                  </DropdownItem>
                  <DropdownItem to="/argon/invoice-page" tag={Link}>
                    <i className="ni ni-bullet-list-67 text-success"></i>
                    Invoice Page
                  </DropdownItem>
                  <DropdownItem to="/argon/checkout-page" tag={Link}>
                    <i className="ni ni-basket text-orange"></i>
                    Checkout Page
                  </DropdownItem>
                  <DropdownItem to="/argon/chat-page" tag={Link}>
                    <i className="ni ni-chat-round text-primary"></i>
                    Chat Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* {user && <GoogleLogout />} */}
              <GoogleLogout />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "dark",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;
