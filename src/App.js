



import React, {Component} from "react";
import './App.css';
import Top from "./Navtop";
import Home from "./Home";
import Blog from "./Blog"
import Contact from "./Contact"
import Services from "./Services"



class App extends Component {
  render(){
    return (
      <div className="main">
        <Top />
        <Home />
        <Services/>
        <Blog/>
        <Contact/>
        {/*<h1>Hello</h1>
        <hr/>
        <h2>Welcome</h2>*/}
      </div>
    ) 
  }
}

export default App;


