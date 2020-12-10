import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SingUp";
import CreateProject from "./components/projects/CreateProject";
import Profile from './components/profile/Profile.js';
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetail} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createproject" component={CreateProject} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
