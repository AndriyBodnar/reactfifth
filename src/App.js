import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.js";
import PostsPage from "./components/Posts/PostsPage.js";
 import PhotosPage from "./components/Photos/PhotosPage.js";
import ContactsPage from "./components/Contacts/ContactsPage.js";
import NavBar from "./components/NavBar/Navbar.js";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/homepage">
              <Homepage />
            </Route>
            <Route path="/posts">
              <PostsPage />
            </Route>
            <Route path="/photos">
              <PhotosPage />
            </Route>
            <Route path="/contacts">
              <ContactsPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/homepage" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
