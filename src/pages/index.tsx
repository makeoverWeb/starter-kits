import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const IndexPage = () => (
  <div className="app">
    <Link to="/page-2/">Go to page 2</Link>;
  </div>
);

export default IndexPage;
