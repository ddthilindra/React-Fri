/* eslint-disable react/jsx-no-undef */
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Namelist from "./Component/Pages/NameList";
import Home from "./Component/Pages/Home/Home";
import About from "./Component/Pages/About/About";
import Headerbar from "./Component/Header/HeaderBar";

function App() {
  return (
    <div>
      <Router>
        <Headerbar />
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/name" exact component={Namelist} />
            <Route path="/" exact component={Home} />
          </Switch>
      </Router>

      {/* <Router>
      <Headerbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/name" exact component={Namelist} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
