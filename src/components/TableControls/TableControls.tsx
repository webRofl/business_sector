import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../redux/store';
import { clearFoundUsers, setPage } from '../../redux/usersReducer';
import classes from './TableControls.module.css';

const TableControls: React.FC = () => {
  const page = useSelector((state: GlobalState) => state.users.page);

  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(setPage(Number(page) - 1));
    dispatch(clearFoundUsers());
  };

  const handleUpClick = () => {
    dispatch(setPage(Number(page) + 1));
    dispatch(clearFoundUsers());
  };

  const uploadPages = () => {
    const pages = [];
    for (let i = 0; i < 5; i += 1) {
      if (page === i + 1)
        pages.push(
          <span key={i} className={classes.mainTable__pagination_active}>
            {i + 1}
          </span>
        );
      else pages.push(<span key={i}>{i + 1}</span>);
    }
    return pages;
  };

  return (
    <div className={classes.mainTable__btnBlock}>
      <button
        onClick={handleBackClick}
        disabled={page === 1}
        className={`${classes.mainTable__btnPrev} ${classes.mainTable__btn}`}
      >
        Назад
      </button>
      <div className={classes.mainTable__pagesBlock}>{uploadPages()}</div>
      <button
        onClick={handleUpClick}
        disabled={page === 5}
        className={`${classes.mainTable__btnNext} ${classes.mainTable__btn}`}
      >
        Далее
      </button>
    </div>
  );
};

export default TableControls;
