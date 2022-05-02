import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../redux/store';
import { loadUsersAsync } from '../../redux/usersReducer';
import ContentTable from './ContentTable/ContentTable';
import HeaderTable from './HeaderTable/HeaderTable';

type MainTableProps = {};

const MainTable: React.FC<MainTableProps> = () => {
  const page = useSelector((state: GlobalState) => state.users.page);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersAsync(page));
  }, [page]);

  return (
    <>
      <HeaderTable />
      <ContentTable />
    </>
  );
};

export default MainTable;
