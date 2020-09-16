import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authService } from '../../redux/services';

const TopNavigation = () => {
  return (
    <>
      <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
        <button id='sidebarToggleTop' className='btn btn-link d-md-none rounded-circle mr-3'>
          <i className='fa fa-bars'></i>
        </button>

  
        <ul className='navbar-nav custom-nav'>
       
            <h6 className='navigation-heading'> Covid-19 Self Declaration Form</h6>
          
        </ul>

        <ul className='navbar-nav ml-auto'>
          <div className='topbar-divider d-none d-sm-block'></div>

          <li className='nav-item dropdown no-arrow'>
            <a
              className='nav-link dropdown-toggle'
              href='#/'
              id='userDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <span className='mr-2 d-none d-lg-inline text-gray-600 small'> </span>
              <img alt='' className='img-profile rounded-circle'  />
            </a>

            <div
              className='dropdown-menu dropdown-menu-right shadow animated--grow-in'
              aria-labelledby='userDropdown'
            >
              <a className='dropdown-item' href='#/'>
                <i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400'></i>
                Profile
              </a>
              <a className='dropdown-item' href='#/'>
                <i className='fas fa-cogs fa-sm fa-fw mr-2 text-gray-400'></i>
                Settings
              </a>

              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='#/' data-toggle='modal' onClick={() => {}}>
                <i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400'></i>
                
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNavigation;
