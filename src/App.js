import { Switch, Route} from "react-router-dom";
import './App.css';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendList';
import Login from './components/Login';
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function App() {

  const {logout} = useContext(AuthContext);

  return (
      <div className="App">
        <div className="header">
        <h1>Client Auth Projesi: Friends</h1>
        <NavLink className ="" to="/login"
        style={{
          color: "white",
          border: "10px solid black",
          backgroundColor: "black",
          textDecoration: "none",
          margin: "1%"
        }}>
            LOGİN
          </NavLink>
          
          <NavLink to="/friends"
          style={{
            color: "white",
            border: "10px solid black",
            backgroundColor: "black",
            textDecoration: "none",
            margin: "1%"
          }}>
            FRIENDS LİST
          </NavLink>
      
          <NavLink to="/friends-add"
          style={{
            color: "white",
            border: "10px solid black",
            backgroundColor: "black",
            textDecoration: "none",
            margin: "1%"
          }}>
            ADD FRIEND
          </NavLink>
        
          <NavLink to="/login" onClick={logout} 
          style={{
            color: "white",
            border: "10px solid black",
            backgroundColor: "black",
            textDecoration: "none",
            margin: "1%"
          }}>
            LOGOUT
          </NavLink>
          </div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends" ><FriendsList/></PrivateRoute>
          <PrivateRoute path="/friends-add"><AddFriend/></PrivateRoute>
        </Switch>
      </div>
  );
}

export default App;
