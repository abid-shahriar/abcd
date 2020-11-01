import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component/resources/styles/style.scss";
import Navbar from "./component/pages/Navbar/Navbar";
import Footer from "./component/pages/Footer/Footer";
import NotFound from "./component/pages/NotFound/NotFound";
import WhyTechOnline from "./component/pages/WhyTechOnline/WhyTechOnline";
import AboutTutors from "./component/pages/AboutTutors/AboutTutors";
import OurProgramms from "./component/pages/OurProgramms/OurProgramms";
import ConsultWithUs from "./component/pages/ConsultWithUs/ConsultWithUs";
import Home from "./component/pages/Home/Home";

// footer shortlink
import FooterShortLink from "./component/FooterShortLink";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutUs" component={WhyTechOnline} />
        <Route path="/tutors" component={AboutTutors} />
        <Route path="/programms" component={OurProgramms} />
        <Route path="/contactUs" component={ConsultWithUs} />
        <Route path="/shortlink" component={FooterShortLink} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
