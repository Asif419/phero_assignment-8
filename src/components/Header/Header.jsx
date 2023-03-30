import React from 'react';

// {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" classNameName="d-inline-block align-text-top" /> */ }
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary mt-3">
        <div className="container px-md-5">
          <div className='px-md-5'>
            <a className="navbar-brand fs-2 fw-bolder" href="#">Programming Cafe</a>
          </div>
          <div className='px-md-5'>
            <div className="collapse navbar-collapse d-md-flex justify-content-md-end gap-3" id="navbarNav">
              <div>
                < img src='./shahariar.jpeg' className="card-img-top rounded-circle" alt='asif'
                  style={{ height: "50px", width: "50px" }} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='container px-md-5 w-75'>
        <hr />
      </div>
    </>
  );
};

export default Header;