import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './404';

const FullErrorPage = () => {
  return (
    <main className="full-error-page">
      <PageNotFound />
      <Link to='/' className="call-to-action"><span className="arrow-narrow-left"></span> Go Home</Link>
    </main>
  );
};

export default FullErrorPage;