import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../redux/store';
import { setPage } from '../../redux/usersReducer';
import classes from './TableControls.module.css';

type TableControlsProps = {};

const TableControls: React.FC<TableControlsProps> = () => {
  const page = useSelector((state: GlobalState) => state.users.page);

  const dispatch = useDispatch();

  const handleBackClick = () => dispatch(setPage(Number(page) - 1));

  const handleUpClick = () => dispatch(setPage(Number(page) + 1));

  const uploadPages = () => {
    const pages = [];
    for (let i = 0; i < 5; i += 1) {
      pages.push(<span key={i}>{i + 1}</span>);
    }
    return pages;
  };

  return (
    <div>
      <button onClick={handleBackClick} disabled={page === 1}>
        Назад
      </button>
      {uploadPages()}
      <button onClick={handleUpClick} disabled={page === 5}>
        Далее
      </button>
    </div>
  );
};

export default TableControls;
