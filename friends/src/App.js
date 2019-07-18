import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Login from "./components/login";
import Friends from "./components/friends";
import "./styles.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

function App() {
  return (
    <div className="App" style={{ padding: 30 }}>
      {/* <div>
        <Link to="/">Login</Link>
        <Link to="/friends">Friends</Link>
      </div> */}
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/friends" component={Friends} />
    
      {/* <Route
        exact
        path="/friends"
        render={props => {
          const token = localStorage.getItem("token");

          if (!token) {
            return <Redirect to="/" />;
          }
          return <Friends {...props} />;
        }}
      /> */}
    </div>
  );
}

export default App;
