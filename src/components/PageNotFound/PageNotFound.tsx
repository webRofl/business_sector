import React from 'react';
import pageNotFoundImg from '../../assets/images/page-not-found.webp';

type PageNotFoundProps = {};

const PageNotFound: React.FC<PageNotFoundProps> = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={pageNotFoundImg} alt="page not found" />
    </div>
  );
};

export default PageNotFound;
