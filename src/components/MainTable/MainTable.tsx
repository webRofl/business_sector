import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUsersAsync } from '../../redux/usersReducer';
import ContentTable from './ContentTable/ContentTable';
import HeaderTable from './HeaderTable/HeaderTable';

type MainTableProps = {};

const MainTable: React.FC<MainTableProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersAsync(1));
  }, []);

  return (
    <>
      <HeaderTable />
      <ContentTable />
    </>
  );
};

export default MainTable;
