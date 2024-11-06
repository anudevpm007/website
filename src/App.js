import React, { Component } from "react";
import Main_Blog from "./Blog/Main_Blog/Main_Blog";
import Blog_detials from "./Blog-detials/Blog_detials";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css"
import "./booking/booking"
import Main_services from "./Services/Main_services";
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
            
            <Route path={"/website/"} element={<Home/>} />
            <Route path={"/website/about/"} Component={About} />
            <Route path={"/website/loading/"} Component={Loading} />
            <Route path={"/website/Under_construction"} Component={Under_construction} />
            <Route path={"/website/carrier"} Component={Carrier} />
            <Route path={"/website/test"} Component={Test} />
            <Route path={"/website/from=blog/"} element={<lazyHome/>} />
            <Route path={"/website/blogs/"} Component={Main_Blog} />
            <Route path={"/blogs/:Headings"} Component={Blog_detials} />
            <Route path={"/website/Book/"} Component={Booking} />
            <Route path={"/website/Register/"} Component={Register} />
            <Route path={"/website/services/:id"} Component={Main_services} />
            <Route path={"/website/events/"} Component={Events} />

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
