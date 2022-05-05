import React, { Dispatch, SetStateAction, useState } from 'react';
import classes from './FindUser.module.css';
import findIcon from '../../assets/images/find-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { findUserAsync, setSearchValue } from '../../redux/usersReducer';
import { GlobalState } from '../../redux/store';

const FindUser: React.FC = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(
    (state: GlobalState) => state.users.searchValue
  );

  const page = useSelector((state: GlobalState) => state.users.page);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.currentTarget.value));
  };

  const handleClick = () => {
    dispatch(findUserAsync(searchValue, page));
  };

  return (
    <div className={classes.findUser__inputBlock}>
      <input
        type="text"
        className={classes.findUser__input}
        placeholder="Поиск"
        value={searchValue}
        onChange={handleChange}
      />
      <img
        src={findIcon}
        alt="find icon"
        className={classes.findUser__findIcon}
        onClick={handleClick}
      />
    </div>
  );
};

export default FindUser;
