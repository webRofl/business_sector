import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { GlobalState } from '../../redux/store';
import { loadUsersAsync, setPage } from '../../redux/usersReducer';
import ContentTable from './ContentTable/ContentTable';
import HeaderTable from './HeaderTable/HeaderTable';

type MainTableProps = {};

const MainTable: React.FC<MainTableProps> = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const page = useSelector((state: GlobalState) => state.users.page);

  const urlPage = useMatch('/:id')?.params.id;

  useEffect(() => {
    if (Number(urlPage) !== page) {
      dispatch(setPage(Number(urlPage)));
    }
  }, []);

  useEffect(() => {
    if (page) {
      dispatch(loadUsersAsync(page));
      navigate('/' + page);
    }
  }, [page]);

  return (
    <>
      <HeaderTable />
      <ContentTable />
    </>
  );
};

export default MainTable;
