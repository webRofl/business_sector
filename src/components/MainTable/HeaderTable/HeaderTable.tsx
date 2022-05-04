import React, { useState } from 'react';
import classes from './HeaderTable.module.css';
import arrowUp from '../../../assets/images/arrow-down.png';
import { useDispatch } from 'react-redux';
import { usersSort } from '../../../redux/usersReducer';

type HeaderTableProps = {};

const HeaderTable: React.FC<HeaderTableProps> = () => {
  const dispatch = useDispatch();

  const [isIdSelected, setIdSelected] = useState(false);

  const [isTitleSelected, setTitleSelected] = useState(false);

  const [isDescriptionSelected, setDescriptionSelected] = useState(false);

  const zeroingArrowAngle = (col: string) => {
    if (col !== 'id') setIdSelected(false);
    if (col !== 'title') setTitleSelected(false);
    if (col !== 'description') setDescriptionSelected(false);
  };

  const sortCondition = (isSelected: boolean, item: string) => {
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
