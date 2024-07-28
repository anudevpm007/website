import React, { Component } from "react";
import Main_Blog from "./Blog/Main_Blog/Main_Blog";
import Home from "./Home/Home";
import Blog_detials from "./Blog-detials/Blog_detials";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Menu from "./Menu/Menu";
import "./App.css"
import Join_us from "./Join_us/Join_us";
import Main_services from "./Services/Main_services";


class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Menu/>
        </div>
        <div className="App1">
        <Routes>
          <Route path="website/" Component={Home} />
          <Route path="website/blogs/" Component={Main_Blog} />
          <Route path="/blogs/:Headings" Component={Blog_detials} />
          <Route path={"/website/Join_Us/"} Component={Join_us} />
          <Route path="website/services/:id" Component={Main_services} />
          
        </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
