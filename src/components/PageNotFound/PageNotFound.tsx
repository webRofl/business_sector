import React from 'react';
import pageNotFoundImg from '../../assets/images/page-not-found.webp';
import classes from './PageNotFound.module.css';

const PageNotFound: React.FC = () => {
  return (
    <div className={classes.errorWrapper}>
      <img src={pageNotFoundImg} alt="page not found" />
    </div>
  );
};

export default PageNotFound;
