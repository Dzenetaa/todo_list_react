/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bp3-list-unstyled container">
      <h2><Link to="/0">List One</Link></h2>
      <h2><Link to="/1">List Two</Link></h2>
      <h2><Link to="/2">List Three</Link></h2>
    </div>
  );
}

export default Home;
