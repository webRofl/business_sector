import React, { Dispatch, SetStateAction, useState } from 'react';
import classes from './FindUser.module.css';
import findIcon from '../../assets/images/find-icon.svg';
import { findUser } from '../../redux/usersReducer';
import { useDispatch } from 'react-redux';

const FindUser: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useDispatch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleClick = () => {
    dispatch(findUser(searchValue));
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
