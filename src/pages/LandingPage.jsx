import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>User is Not Logged In</h1>
      <h1>Landing Page Goes Here</h1>
      <button type="button"><Link to="/login">Log In</Link></button>
      <button type="button"><Link to="/signup">Sign up</Link></button>
    </div>
  )
}

export default LandingPage;