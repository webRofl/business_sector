import React from 'react';
import classes from './HeaderTable.module.css';

type HeaderTableProps = {};

const HeaderTable: React.FC<HeaderTableProps> = () => {
  return (
    <div className={classes.mainTable__headerBlock}>
      <div className={classes.mainTable__headerArrowBlock}>
        <h3>ID</h3>
        <div className={classes.mainTable__headerArrow}></div>
        <div className={classes.mainTable__headerArrow}></div>
      </div>
      <div className={classes.mainTable__headerArrowBlock}>
        <h3>Заголовок</h3>
        <div className={classes.mainTable__headerArrow}></div>
        <div className={classes.mainTable__headerArrow}></div>
      </div>
      <div className={classes.mainTable__headerArrowBlock}>
        <h3>Описание</h3>
        <div className={classes.mainTable__headerArrow}></div>
        <div className={classes.mainTable__headerArrow}></div>
      </div>
    </div>
  );
};

export default HeaderTable;
