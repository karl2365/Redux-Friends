import React from 'react';
import './App.css';
import FriendsListView from './components/FriendsListView';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
    <Router>
      <div className="App">
        
        <h2>friends list</h2> 
        <Link to='/api/login'>Log In Here</Link>
        <Route path='/api/login' component={Login} />
        <PrivateRoute exact path='/api/friends' component={FriendsListView} />

      </div>
    </Router>
  );
}

export default App;
