import './App.css';
import React from "react";
import Timer from "./components/Timer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

function App() {
  return ( 
     <div>
      <Timer />
      <p>Test :)</p>
    </div>
 
  );
}

export default App;
