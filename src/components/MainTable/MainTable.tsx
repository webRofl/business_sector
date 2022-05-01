import React from 'react';
import ContentTable from './ContentTable/ContentTable';
import HeaderTable from './HeaderTable/HeaderTable';
import classes from './MainTable.module.css';

type MainTableProps = {};

const MainTable: React.FC<MainTableProps> = () => {
  return (
    <>
      <HeaderTable />
      <ContentTable />
    </>
  );
};

export default MainTable;
