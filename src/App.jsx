import React, { useState, useLayoutEffect } from 'react';
import { hot } from 'react-hot-loader';
// import router
import { Route, Link, useLocation, useHistory } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Teams from './pages/Teams';

// import components
import {
  CreateResource,
  ResourceCard,
  CreateTeam,
  TeamDetails,
  NavBar,
 } from './components';
import { useStateValue } from './StateProvider';

function App() {
  const location = useLocation().pathname;
  const history = useHistory();
  
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
    // TO DO: consolidate
    localStorage.setItem('userIsLoggedIn', "false")
    localStorage.setItem('currentUser', "")
    localStorage.setItem('currentTeam', "")

    dispatch({
      type: 'UNAUTH_USER',
    });

    history.push('/');
  };

  console.log("User is logged in", user.isLoggedIn, user);

  return (
    <div className="outerContainer">
      {/* {user.isLoggedIn && <Navbar />} */}
      <NavBar />
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
        <Route path="/home" exact component={Home} />
        <Route path="/teams/:id" component={TeamDetails} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/CreateResource" component={CreateResource} />
        <Route path="/CreateTeam" component={CreateTeam} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/resources" component={ResourceCard} />
      </div>
    </div>
  );
}

export default hot(module)(App);
