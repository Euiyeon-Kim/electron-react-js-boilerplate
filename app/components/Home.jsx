import React from 'react';
import styles from './Home.css';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

export default function Home() {
  return (
    <div className={styles.home} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.TESTPAGE1}>to page1</Link>
    </div>
  );
}
