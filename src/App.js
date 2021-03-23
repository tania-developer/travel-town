
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import SearchRide from './components/SearchRide/SearchRide';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const CarContext = createContext();


function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [carName, setCarName] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <CarContext.Provider value = {[carName, setCarName]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/location">
            <SearchRide></SearchRide>
          </PrivateRoute>            
        </Switch>
      </Router> 
      </CarContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
