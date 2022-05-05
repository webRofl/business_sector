import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../redux/store';
import { setPage } from '../../redux/usersReducer';
import classes from './TableControls.module.css';

const TableControls: React.FC = () => {
  const [pageCount, setPageCount] = useState<number>(0);

  const foundUsers = useSelector(
    (state: GlobalState) => state.users.foundUsers
  );

  const usersCount = useSelector(
    (state: GlobalState) => state.users.totalUsersCount
  );

  const page = useSelector((state: GlobalState) => state.users.page);

  const dispatch = useDispatch();

  useEffect(() => {
    setPageCount(Math.ceil(usersCount / 10));
  }, [usersCount, foundUsers]);

  const handleBackClick = () => {
    dispatch(setPage(Number(page) - 1));
  };

  const handleUpClick = () => {
    dispatch(setPage(Number(page) + 1));
  };

  const uploadPages = (count: number) => {
    const spanArray = [];
    for (let i = 0; i < count; i += 1) {
      spanArray.push(
        <span
          key={i}
          className={`${
            page === i + 1
              ? classes.mainTable__pagination_active
              : classes.mainTable__pagination
          }`}
        >
          {i + 1}
        </span>
      );
    }
    return spanArray;
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
      <div className={classes.mainTable__pagesBlock}>
        {uploadPages(pageCount)}
      </div>
      <button
        onClick={handleUpClick}
        disabled={page === pageCount}
        className={`${classes.mainTable__btnNext} ${classes.mainTable__btn}`}
      >
        Далее
      </button>
    </div>
  );
};

export default TableControls;
