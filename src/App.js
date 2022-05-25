import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";
import "react-toastify/dist/ReactToastify.css";

import "./assets/themify-icon/themify-icons.css";
import "./assets/simple-line-icon/simple-line-icons.css";
import "./assets/font-awesome/css/all.css";
import "./assets/elagent/style.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./assets/animate.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "./assets/responsive.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "popper.js";

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
import ProtectedRoutes from "ProtectedRoutes";
import NewPassword from "components/cards/NewPassword";
import NlpJs from "views/examples/NlpJs.js";
import Proximity from "views/examples/Proximity.js";
import GAD2 from "views/examples/GAD2.js";
import GAD7 from "views/examples/GAD7.js";
import PHQ2 from "views/examples/PHQ2.js";
import PHQ9 from "views/examples/PHQ9.js";
import PTSD5 from "views/examples/PTSD5.js";
import SAVE9 from "views/examples/SAVE9.js";
import Conversationer01 from "views/examples/Conversationer01.js";
import Conversationer02 from "views/examples/Conversationer02.js";
import Conversationer03 from "views/examples/Conversationer03.js";
import Identifiers from "views/examples/Identifiers.js";
import Illuminators from "views/examples/Illuminators.js";
import Connectors from "views/examples/Connectors.js";
import Reflectors from "views/examples/Reflectors.js";
import Echoes from "views/examples/Echoes.js";
import EPS from "views/examples/EPS.js";
import AboutIdentifiers from "./Pages/AboutIdentifiers";
import SelfIdentifier from "./Pages/SelfIdentifier";
import VoiceIdentifier from "./Pages/VoiceIdentifier";
import PersonIdentifier from "./Pages/PersonIdentifier";
import PlaceIdentifier from "./Pages/PlaceIdentifier";
import EventIdentifier from "./Pages/EventIdentifier";
import ObjectIdentifier from "./Pages/ObjectIdentifier";
import AboutIlluminators from "./Pages/AboutIlluminators";
import SelfIlluminator from "./Pages/SelfIlluminator";
import VoiceIlluminator from "./Pages/VoiceIlluminator";
import PersonIlluminator from "./Pages/PersonIlluminator";
import PlaceIlluminator from "./Pages/PlaceIlluminator";
import EventIlluminator from "./Pages/EventIlluminator";
import ObjectIlluminator from "./Pages/ObjectIlluminator";
import AboutConnectors from "./Pages/AboutConnectors";
import GroupConnector from "./Pages/GroupConnector";
import AssertingConnector from "./Pages/AssertingConnector";
import ProducingConnector from "./Pages/ProducingConnector";
import ThinkingConnector from "./Pages/ThinkingConnector";
import ProtectingConnector from "./Pages/ProtectingConnector";
import CreatingConnector from "./Pages/CreatingConnector";
import AnalysingConnector from "./Pages/AnalysingConnector";
import RelatingConnector from "./Pages/RelatingConnector";
import TransformingConnector from "./Pages/TransformingConnector";
import DevelopingConnector from "./Pages/DevelopingConnector";
import OrganisingConnector from "./Pages/OrganisingConnector";
import ProgressingConnector from "./Pages/ProgressingConnector";
import ImaginingConnector from "./Pages/ImaginingConnector";
import AboutReflectors from "./Pages/AboutReflectors";
import SelfSelfReflector from "./Pages/SelfSelfReflector";
import SelfVoiceReflector from "./Pages/SelfVoiceReflector";
import SelfPersonReflector from "./Pages/SelfPersonReflector";
import SelfPlaceReflector from "./Pages/SelfPlaceReflector";
import SelfEventReflector from "./Pages/SelfEventReflector";
import SelfObjectReflector from "./Pages/SelfObjectReflector";
import AboutEchoes from "./Pages/AboutEchoes";
import PulseEcho from "./Pages/PulseEcho";
import FutureEcho from "./Pages/FutureEcho";
import PastEcho from "./Pages/PastEcho";

const App = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUser(token);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/labs/create-password/:email/:token"
          exact
          render={(props) => <NewPassword {...props} />}
        />
        <Route
          path="/labs/index"
          exact
          render={(props) => <Index {...props} />}
        />
        <Route
          path="/labs/sections"
          exact
          render={(props) => <Sections {...props} />}
        />
        <Route
          path="/labs/presentation"
          exact
          render={(props) => <Presentation {...props} />}
        />
        <Route
          path="/labs/about-us"
          exact
          render={(props) => <AboutUs {...props} />}
        />
        <Route
          path="/labs/account-settings"
          exact
          render={(props) => <AccountSettings {...props} />}
        />
        <Route
          path="/labs/blog-post"
          exact
          render={(props) => <BlogPost {...props} />}
        />
        <Route
          path="/labs/blog-posts"
          exact
          render={(props) => <BlogPosts {...props} />}
        />
        <Route
          path="/labs/chat-page"
          exact
          render={(props) => <ChatPage {...props} />}
        />
        <Route
          path="/labs/checkout-page"
          exact
          render={(props) => <CheckoutPage {...props} />}
        />
        <Route
          path="/labs/contact-us"
          exact
          render={(props) => <ContactUs {...props} />}
        />
        <Route
          path="/labs/ecommerce"
          exact
          render={(props) => <Ecommerce {...props} />}
        />
        <Route path="/error" exact render={(props) => <Error {...props} />} />
        <Route
          path="/labs/error-500"
          exact
          render={(props) => <Error500 {...props} />}
        />
        <Route
          path="/labs/invoice-page"
          exact
          render={(props) => <InvoicePage {...props} />}
        />
        <Route
          path="/labs/landing-page"
          exact
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/labs/login-page"
          exact
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/labs/pricing-page"
          exact
          render={(props) => <PricingPage {...props} />}
        />
        <Route
          path="/labs/product-page"
          exact
          render={(props) => <ProductPage {...props} />}
        />
        <Route
          path="/labs/profile-page"
          exact
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/labs/register-page"
          exact
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/labs/reset-page"
          exact
          render={(props) => <ResetPage {...props} />}
        />
        <Route
          path="/labs/nlpjs"
          exact
          render={(props) => <NlpJs {...props} />}
        />
        <Route
          path="/labs/proximity"
          exact
          render={(props) => <Proximity {...props} />}
        />
        <Route
          path="/labs/GAD2"
          exact
          render={(props) => <GAD2 {...props} />}
        />
        <Route
          path="/labs/GAD7"
          exact
          render={(props) => <GAD7 {...props} />}
        />
        <Route
          path="/labs/PHQ2"
          exact
          render={(props) => <PHQ2 {...props} />}
        />
        <Route
          path="/labs/PHQ9"
          exact
          render={(props) => <PHQ9 {...props} />}
        />
        <Route
          path="/labs/PTSD5"
          exact
          render={(props) => <PTSD5 {...props} />}
        />
        <Route
          path="/labs/SAVE9"
          exact
          render={(props) => <SAVE9 {...props} />}
        />
        <Route
          path="/labs/Conversationer01"
          exact
          render={(props) => <Conversationer01 {...props} />}
        />
        <Route
          path="/labs/Conversationer02"
          exact
          render={(props) => <Conversationer02 {...props} />}
        />
        <Route
          path="/labs/Conversationer03"
          exact
          render={(props) => <Conversationer03 {...props} />}
        />
        <Route path="#" exact render={(props) => <Identifiers {...props} />} />
        <Route
          path="/labs/AboutIdentifiers"
          exact
          render={(props) => <AboutIdentifiers {...props} />}
        />
        <Route
          path="/labs/SelfIdentifier"
          exact
          render={(props) => <SelfIdentifier {...props} />}
        />
        <Route
          path="/labs/VoiceIdentifier"
          exact
          render={(props) => <VoiceIdentifier {...props} />}
        />
        <Route
          path="/labs/PersonIdentifier"
          exact
          render={(props) => <PersonIdentifier {...props} />}
        />
        <Route
          path="/labs/PlaceIdentifier"
          exact
          render={(props) => <PlaceIdentifier {...props} />}
        />
        <Route
          path="/labs/EventIdentifier"
          exact
          render={(props) => <EventIdentifier {...props} />}
        />
        <Route
          path="/labs/ObjectIdentifier"
          exact
          render={(props) => <ObjectIdentifier {...props} />}
        />

        <Route
          path="/labs/Illuminators"
          exact
          render={(props) => <Illuminators {...props} />}
        />
        <Route
          path="/labs/AboutIlluminators"
          exact
          render={(props) => <AboutIlluminators {...props} />}
        />
        <Route
          path="/labs/SelfIlluminator"
          exact
          render={(props) => <SelfIlluminator {...props} />}
        />
        <Route
          path="/labs/VoiceIlluminator"
          exact
          render={(props) => <VoiceIlluminator {...props} />}
        />
        <Route
          path="/labs/PersonIlluminator"
          exact
          render={(props) => <PersonIlluminator {...props} />}
        />
        <Route
          path="/labs/PlaceIlluminator"
          exact
          render={(props) => <PlaceIlluminator {...props} />}
        />
        <Route
          path="/labs/EventIlluminator"
          exact
          render={(props) => <EventIlluminator {...props} />}
        />
        <Route
          path="/labs/ObjectIlluminator"
          exact
          render={(props) => <ObjectIlluminator {...props} />}
        />

        <Route
          path="/labs/Connectors"
          exact
          render={(props) => <Connectors {...props} />}
        />
        <Route
          path="/labs/AboutConnectors"
          exact
          render={(props) => <AboutConnectors {...props} />}
        />
        <Route
          path="/labs/GroupConnector"
          exact
          render={(props) => <GroupConnector {...props} />}
        />
        <Route
          path="/labs/AssertingConnector"
          exact
          render={(props) => <AssertingConnector {...props} />}
        />
        <Route
          path="/labs/ProducingConnector"
          exact
          render={(props) => <ProducingConnector {...props} />}
        />
        <Route
          path="/labs/ThinkingConnector"
          exact
          render={(props) => <ThinkingConnector {...props} />}
        />
        <Route
          path="/labs/ProtectingConnector"
          exact
          render={(props) => <ProtectingConnector {...props} />}
        />
        <Route
          path="/labs/CreatingConnector"
          exact
          render={(props) => <CreatingConnector {...props} />}
        />
        <Route
          path="/labs/AnalysingConnector"
          exact
          render={(props) => <AnalysingConnector {...props} />}
        />
        <Route
          path="/labs/RelatingConnector"
          exact
          render={(props) => <RelatingConnector {...props} />}
        />
        <Route
          path="/labs/TransformingConnector"
          exact
          render={(props) => <TransformingConnector {...props} />}
        />
        <Route
          path="/labs/DevelopingConnector"
          exact
          render={(props) => <DevelopingConnector {...props} />}
        />
        <Route
          path="/labs/OrganisingConnector"
          exact
          render={(props) => <OrganisingConnector {...props} />}
        />
        <Route
          path="/labs/ProgressingConnector"
          exact
          render={(props) => <ProgressingConnector {...props} />}
        />
        <Route
          path="/labs/ImaginingConnector"
          exact
          render={(props) => <ImaginingConnector {...props} />}
        />

        <Route
          path="/labs/Reflectors"
          exact
          render={(props) => <Reflectors {...props} />}
        />
        <Route
          path="/labs/AboutReflectors"
          exact
          render={(props) => <AboutReflectors {...props} />}
        />
        <Route
          path="/labs/SelfSelfReflector"
          exact
          render={(props) => <SelfSelfReflector {...props} />}
        />
        <Route
          path="/labs/SelfVoiceReflector"
          exact
          render={(props) => <SelfVoiceReflector {...props} />}
        />
        <Route
          path="/labs/SelfPersonReflector"
          exact
          render={(props) => <SelfPersonReflector {...props} />}
        />
        <Route
          path="/labs/SelfPlaceReflector"
          exact
          render={(props) => <SelfPlaceReflector {...props} />}
        />
        <Route
          path="/labs/SelfEventReflector"
          exact
          render={(props) => <SelfEventReflector {...props} />}
        />
        <Route
          path="/labs/SelfObjectReflector"
          exact
          render={(props) => <SelfObjectReflector {...props} />}
        />

        <Route
          path="/labs/Echoes"
          exact
          render={(props) => <Echoes {...props} />}
        />
        <Route
          path="/labs/AboutEchoes"
          exact
          render={(props) => <AboutEchoes {...props} />}
        />
        <Route
          path="/labs/PulseEcho"
          exact
          render={(props) => <PulseEcho {...props} />}
        />
        <Route
          path="/labs/FutureEcho"
          exact
          render={(props) => <FutureEcho {...props} />}
        />
        <Route
          path="/labs/PastEcho"
          exact
          render={(props) => <PastEcho {...props} />}
        />

        <Route path="/labs/EPS" exact render={(props) => <EPS {...props} />} />
        <Redirect to="/labs/index" />
        <ProtectedRoutes isAuth={user} component={AccountSettings} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
