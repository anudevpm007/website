import React, { Component } from "react";
import Main_Blog from "./Blog/Main_Blog/Main_Blog";
import Blog_detials from "./Blog-detials/Blog_detials";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css"
import "./booking/booking"
import Events from "./Events/Events";
import Register from "./register/register";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Test from "./test/test";
import Carrier from "./Carrier/Carrier";
import Under_construction from "./under_con/Under_construction";
import Booking from "./booking/booking";
import About from "./about/about";
import Loading from "./Loading/Loading"
import Home from "./Home/Home";
import MainServices from "./MainServices/MainServices";
import BookingConselting from "./BookingConselting/BookingConselting";



class App extends Component {
  render() {
    // var url = window.location.pathname;
    // console.log(url)
    // var parts = url.split("/");
    // var idu = parts[parts.length - 1];

    return (

      <Router>
        {/* <div id="App"> */}
        {/* <Menu/> */}
        {/* </div> */}
        <div className="App1">
          <HelmetProvider>
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>INKOGSEK</title>
                <link rel="canonical" />
              </Helmet>
            </div>
          </HelmetProvider>

          <Routes>
            
            <Route path={"/"} element={<Home/>} />
            <Route path={"/about/"} Component={About} />
            <Route path={"/loading/"} Component={Loading} />
            <Route path={"/Under_construction"} Component={Under_construction} />
            <Route path={"/carrier"} Component={Carrier} />
            <Route path={"/test"} Component={Test} />
            <Route path={"/from=blog/"} element={<lazyHome/>} />
            <Route path={"/blogs/"} Component={Main_Blog} />
            <Route path={"/blogs/:Headings"} Component={Blog_detials} />
            <Route path={"/Book/"} Component={Booking} />
            <Route path={"/Register/"} Component={Register} />
            <Route path={"/services/"} Component={MainServices} />
            <Route path={"/events/"} Component={Events} />
            <Route path={"/Bookingconselting"} Component={BookingConselting}/>

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
