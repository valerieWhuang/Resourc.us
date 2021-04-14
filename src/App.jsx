import React, { useState, useLayoutEffect } from 'react';
import { hot } from 'react-hot-loader';
// import router
import { Route, Link, useLocation } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Teams from './pages/Teams';
import TeamDetailPage from './components/TeamDetailPage';

// import components
import Navbars from './components/Navbar';
import CreateTeam from './components/CreateTeam';
import CreateResource from './components/CreateResource';
import ResourceCard from './components/ResourceCard';
import { useStateValue } from './StateProvider';

function App() {
  const location = useLocation().pathname;
  const [button, setButton] = useState(<Link to="/CreateResource" className="btn btn-success">Create Resource</Link>);
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  useLayoutEffect(() => {
    if (location === '/teams') {
      setButton(<Link to="/CreateTeam" className="btn btn-success">Create Team</Link>);
    } else if (location === '/CreateTeam' || location === '/CreateResource' || location === '/login' || location === '/signup') {
      setButton('');
    } else {
      setButton(<Link to="/CreateResource" className="btn btn-success">Create Resource</Link>);
    }
  }, [location]);

  const userLogout = () => {
    dispatch({
      type: 'UNAUTH_USER',
    });
  };

  console.log("User is logged in", user.isLoggedIn, user);

  return (
    <div className="outerContainer">
      {user.isLoggedIn && <Navbars />}
      <div className="innerContainer">
        <header className="mainHeader">
          <ul>
            <li className="primary-action">{button}</li>
            { user.isLoggedIn ? (
              <li>
                <button type="button" onClick={userLogout}>Logout</button>
              </li>
            ) : (
              <div className="login-signup-buttons">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </div>
            )}
          </ul>
        </header>
        <Route path="/" exact><Home /></Route>
        <Route path="/teams/:id" component={TeamDetailPage} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/CreateResource"><CreateResource /></Route>
        <Route path="/CreateTeam"><CreateTeam /></Route>
        <Route path="/signup"><SignupPage /></Route>
        <Route path="/login"><LoginPage /></Route>
        <Route path="/ResourceCard"><ResourceCard /></Route>
      </div>
    </div>
  );
}

export default hot(module)(App);
