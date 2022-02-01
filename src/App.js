import React from 'react';
import logo from './logo.svg';
import './App.css';
// Add the authentication flow in App.js
import { withAuthenticator, AmplifySignOut  } from '@aws-amplify/ui-react'
// , AmplifySignOut

// import awsconfig from './aws-exports';

// Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
