import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

export default function Test1() {
  return (
    <div className="page1" data-tid="container">
      <h2>Test1</h2>
      <Link to={routes.HOME}>to home</Link>
    </div>
  );
}
