import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Layout/Navbar'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'; 
import NotFound from './Components/Pages/NotFound';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import User from './Components/Users/User';

function App() {
  return (
   <Router>
      <div className="App">
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/users/add" component={AddUser}/>
        <Route path="/users/edit/:id" component={EditUser}/>
        <Route path="/users/:id" component={User}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
