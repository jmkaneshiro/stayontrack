import React from 'react';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Looks like the page you were looking for does not exist.</p>
      <img src={window.pageNotFoundURL} alt="Character in telvision series, Spongebob Squarepants says, 'East, I thought you said Weast?'"/>
      
    </div>
  );
}

export default PageNotFound;