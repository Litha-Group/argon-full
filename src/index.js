import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import Index from "views/Index.js";
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AccountSettings from "views/examples/AccountSettings.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ChatPage from "views/examples/ChatPage.js";
import CheckoutPage from "views/examples/CheckoutPage.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error from "views/examples/Error.js";
import Error500 from "views/examples/Error500.js";
import InvoicePage from "views/examples/InvoicePage.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import PricingPage from "views/examples/PricingPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ResetPage from "views/examples/ResetPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/argon/index" exact render={(props) => <Index {...props} />} />
      <Route
        path="/argon/sections"
        exact
        render={(props) => <Sections {...props} />}
      />
      <Route
        path="/argon/presentation"
        exact
        render={(props) => <Presentation {...props} />}
      />
      <Route
        path="/argon/about-us"
        exact
        render={(props) => <AboutUs {...props} />}
      />
      <Route
        path="/argon/account-settings"
        exact
        render={(props) => <AccountSettings {...props} />}
      />
      <Route
        path="/argon/blog-post"
        exact
        render={(props) => <BlogPost {...props} />}
      />
      <Route
        path="/argon/blog-posts"
        exact
        render={(props) => <BlogPosts {...props} />}
      />
      <Route
        path="/argon/chat-page"
        exact
        render={(props) => <ChatPage {...props} />}
      />
      <Route
        path="/argon/checkout-page"
        exact
        render={(props) => <CheckoutPage {...props} />}
      />
      <Route
        path="/argon/contact-us"
        exact
        render={(props) => <ContactUs {...props} />}
      />
      <Route
        path="/argon/ecommerce"
        exact
        render={(props) => <Ecommerce {...props} />}
      />
      <Route path="/argon/error" exact render={(props) => <Error {...props} />} />
      <Route
        path="/argon/error-500"
        exact
        render={(props) => <Error500 {...props} />}
      />
      <Route
        path="/argon/invoice-page"
        exact
        render={(props) => <InvoicePage {...props} />}
      />
      <Route
        path="/argon/landing-page"
        exact
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/argon/login-page"
        exact
        render={(props) => <LoginPage {...props} />}
      />
      <Route
        path="/argon/pricing-page"
        exact
        render={(props) => <PricingPage {...props} />}
      />
      <Route
        path="/argon/product-page"
        exact
        render={(props) => <ProductPage {...props} />}
      />
      <Route
        path="/argon/profile-page"
        exact
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/argon/register-page"
        exact
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/argon/reset-page"
        exact
        render={(props) => <ResetPage {...props} />}
      />
      <Redirect to="/argon/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);