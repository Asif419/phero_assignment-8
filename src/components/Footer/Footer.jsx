import React from 'react';

const Footer = () => {
  return (
    <div className='container px-md-5 mt-3 text-light'>
      <div className='px-md-5 text-light-emphasis'>
        <div className='bg-dark p-sm-1 p-md-5 rounded-top'>
          <p className='fs-3 mb-5'>Question panel</p>
          <div>
            <p className='fw-bold'>Props vs state</p>
            <p className='ps-2'>Answer: </p>
            <p className='fw-bold'>How does useState work?</p>
            <p className='ps-2'>Answer: </p>
            <p className='fw-bold'>Purpose of useEffect other than fetching data.</p>
            <p className='ps-2'>Answer: </p>
            <p className='fw-bold'>How Does React work?</p>
            <p className='ps-2'>Answer: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;