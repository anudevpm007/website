import React, { Component } from "react";
import Main_Blog from "./Blog/Main_Blog/Main_Blog";
import Home from "./Home/Home";
import Blog_detials from "./Blog-detials/Blog_detials";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css"
import Book from "./Book/Book";
import Main_services from "./Services/Main_services";
import Events from "./Events/Events";
import Main_book from "./Book/Main_book";
import { Helmet } from "react-helmet";
import Main_book_Register from "./Events/Register/Main_Register";


class App extends Component {
  render() {
    var url = window.location.pathname;
    console.log(url)
    var parts = url.split("/");
    var idu = parts[parts.length - 1];
    
    return (

      <Router>
        {/* <div id="App"> */}
          {/* <Menu/> */}
        {/* </div> */}
        <div className="App1">
        <Helmet>
                <meta charSet="utf-8" />
                <title>INKOGSEK</title>
                <link rel="canonical"/>
        </Helmet>
        
        <Routes>
          <Route path="website/" Component={Home} />
          <Route path="website/from=blog/" Component={Home} />
          <Route path="website/blogs/" Component={Main_Blog} />
          <Route path="/blogs/:Headings" Component={Blog_detials} />
          <Route path={"/website/Book/"} Component={Main_book} />
          <Route path={"/website/Register/"} Component={Main_book_Register} />
          <Route path="website/services/:id" Component={Main_services} />
          <Route path="/website/events/" Component={Events} />
          
        </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
