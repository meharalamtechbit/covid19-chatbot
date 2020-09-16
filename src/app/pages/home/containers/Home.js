import React, { Component } from 'react';

import HomeRoutes from '../homeRoutes';
import { TopNavigation } from '../../../ui-components/navigation';

import '../styles/home.css';

class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavigation />
        <div id='wrapper'>
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <div className='container-fluid'>
                <div className='row clearfix'>
                  <div className='col-lg-12'>
                    <div className='card'>
                      <HomeRoutes />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className='scroll-to-top rounded' href='#page-top'>
            <i className='fas fa-angle-up'></i>
          </a>

         
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
