import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import Textbooks from './pages/textbooks';
import Navbar from './components/Navbar';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Double Take</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/textbooks">
            Textbooks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/chat">
            Chat
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/mentors">
            Mentorship
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/studygroups">
            Study Groups
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/events">
            Events
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/textbooks" component={Textbooks} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
