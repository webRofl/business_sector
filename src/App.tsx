import React from 'react';
import FindUser from './components/FindUser/FindUser';
import MainTable from './components/MainTable/MainTable';
import TableControls from './components/TableControls/TableControls';

const App = () => {
  return (
    <div>
      <FindUser />
      <MainTable />
      <TableControls />
    </div>
  );
};

export default App;
