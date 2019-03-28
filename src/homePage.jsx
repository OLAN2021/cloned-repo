import React, { Component } from 'react';

import './homePage.scss';

const SECTIONS = [
  {
    title: 't-shirts'
  },
  {
    title: 'boardshorts'
  },
  {
    title: 'hats & beanies'
  },
  {
    title: 'womens'
  },
  {
    title: 'mens'
  }
];

class HomePage extends Component {
  render() {
    return (
      <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <div className='directory-menu'>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'>T-SHIRTS</div>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'>BOARDSHORTS</div>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'>HATS & BEANIES</div>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'>WOMENS</div>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'>MENS</div>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;