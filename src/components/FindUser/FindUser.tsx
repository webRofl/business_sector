import React from 'react';
import classes from './FindUser.module.css';
import findIcon from '../../assets/images/find-icon.svg';

type FindUserProps = {};

const FindUser: React.FC<FindUserProps> = () => {
  return (
    <div className={classes.findUser__inputBlock}>
      <input
        type="text"
        className={classes.findUser__input}
        placeholder="Поиск"
      />
      <img
        src={findIcon}
        alt="find icon"
        className={classes.findUser__findIcon}
      />
    </div>
  );
};

export default FindUser;
