import React from "react";
import "./App.css";
import logo from "./logo.png";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Academics from "./Components/Academics";
import Vice_chancellor from "./Components/Adminstration/Vice_chancellor";
import Principal from "./Components/Adminstration/Principal";
import Institute from "./Components/Adminstration/Institute";
import Hostel from "./Components/Adminstration/Hostel";
import Civil from "./Components/Department/Civil";
import Computer from "./Components/Department/Computer";
import Electronics from "./Components/Department/Electronics";
import Basic from "./Components/Department/Basic";
import Mechanical from "./Components/Department/Mechanical";
import Electrical from "./Components/Department/Electrical";
import Facility from "./Components/Facility";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <img className="logo" src={logo} alt="logo..." />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Academics" component={Academics} />
        <Route exact path="/Vice_chancellor" component={Vice_chancellor} />
        <Route exact path="/Principal" component={Principal} />
        <Route exact path="/Institute" component={Institute} />
        <Route exact path="/Hostel" component={Hostel} />
        <Route exact path="/Civil" component={Civil} />
        <Route exact path="/Computer" component={Computer} />
        <Route exact path="/Electronics" component={Electronics} />
        <Route exact path="/Electrical" component={Electrical} />
        <Route exact path="/Mechanical" component={Mechanical} />
        <Route exact path="/Basic" component={Basic} />
        <Route exact path="/Facility" component={Facility} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
