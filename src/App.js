import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppRouter} from './AppRouter';
import {TopRow} from "./components/topRow";

const App = React.memo(() => {
  return (
    <div id="container">
      <TopRow />
      <AppRouter />
    </div>
  );
});

export {App};
