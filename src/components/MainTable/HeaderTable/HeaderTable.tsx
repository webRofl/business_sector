import React, { useState } from 'react';
import classes from './HeaderTable.module.css';
import arrowUp from '../../../assets/images/arrow-down.png';
import { useDispatch } from 'react-redux';
import { usersSort } from '../../../redux/usersReducer';
import { Item } from '../../../types/types';

const HeaderTable: React.FC = () => {
  const dispatch = useDispatch();

  const [isIdSelected, setIdSelected] = useState<boolean>(false);

  const [isTitleSelected, setTitleSelected] = useState<boolean>(false);

  const [isDescriptionSelected, setDescriptionSelected] =
    useState<boolean>(false);

  const zeroingArrowAngle = (col: string) => {
    // set all column to false except col variable
    if (col !== 'id') setIdSelected(false);
    if (col !== 'title') setTitleSelected(false);
    if (col !== 'description') setDescriptionSelected(false);
  };

  const sortCondition = (isSelected: boolean, item: Item) => {
    if (isSelected) dispatch(usersSort(false, item));
    else dispatch(usersSort(true, item));
  };

  const handleClickId = () => {
    setIdSelected(!isIdSelected);
    zeroingArrowAngle('id');
    sortCondition(isIdSelected, 'id');
  };

  const handleClickTitle = () => {
    setTitleSelected(!isTitleSelected);
    zeroingArrowAngle('title');
    sortCondition(isTitleSelected, 'title');
  };

  const handleClickDescription = () => {
    setDescriptionSelected(!isDescriptionSelected);
    zeroingArrowAngle('description');
    sortCondition(isDescriptionSelected, 'body');
  };

  return (
    <div className={classes.headerTable__wrapper}>
      <div
        className={`${classes.headerTable__infoWrapper} ${classes.headerTable__idBlock}`}
        onClick={handleClickId}
      >
        <span>ID</span>
        <img
          src={arrowUp}
          alt="arrow"
          className={classes.headerTable__headerArrow}
          style={isIdSelected ? { transform: 'rotate(180deg)' } : {}}
        />
      </div>
      <div
        className={`${classes.headerTable__infoWrapper} ${classes.headerTable__titleBlock}`}
        onClick={handleClickTitle}
      >
        <span>Заголовок</span>
        <img
          src={arrowUp}
          alt="arrow"
          className={classes.headerTable__headerArrow}
          style={isTitleSelected ? { transform: 'rotate(180deg)' } : {}}
        />
      </div>
      <div
        className={`${classes.headerTable__infoWrapper} ${classes.headerTable__descriptionBlock}`}
        onClick={handleClickDescription}
      >
        <span>Описание</span>
        <img
          src={arrowUp}
          alt="arrow"
          className={classes.headerTable__headerArrow}
          style={isDescriptionSelected ? { transform: 'rotate(180deg)' } : {}}
        />
      </div>
    </div>
  );
};

export default HeaderTable;
