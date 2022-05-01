import React from 'react';
import FindUser from './components/FindUser/FindUser';
import MainTable from './components/MainTable/MainTable';
import TableControls from './components/TableControls/TableControls';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <main className={classes.mainWrapper}>
      <FindUser />
      <MainTable />
      <TableControls />
    </main>
  );
};

export default App;
