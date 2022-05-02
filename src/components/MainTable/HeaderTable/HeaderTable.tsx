import React from 'react';
import classes from './HeaderTable.module.css';
import arrowUp from '../../../assets/images/arrow-up-icon.svg';

type HeaderTableProps = {};

const HeaderTable: React.FC<HeaderTableProps> = () => {
  return (
    <div className={classes.headerTable__wrapper}>
      <div
        className={`${classes.headerTable__infoWrapper} ${classes.headerTable__idBlock}`}
      >
        <span>ID</span>
        <img
          src={arrowUp}
          alt="arrow up icon"
          className={classes.headerTable__headerArrow}
        />
      </div>
      <div
        className={`${classes.headerTable__infoWrapper} ${classes.headerTable__titleBlock}`}
      >
        <span>Заголовок</span>
        <img
          src={arrowUp}
          alt="arrow up icon"
          className={classes.headerTable__headerArrow}
        />
      </div>
      <div
        className={`${classes.headerTable__infoWrapper} ${classes.headerTable__descriptionBlock}`}
      >
        <span>Описание</span>
        <img
          src={arrowUp}
          alt="arrow up icon"
          className={classes.headerTable__headerArrow}
        />
      </div>
    </div>
  );
};

export default HeaderTable;
