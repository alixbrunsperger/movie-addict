import React from 'react';
import Menu from './Menu';
import Search from './Search';
import Logo from './Logo';

export default ({showPopup}) => (
      <div className="header">
        <Logo />
        <Search showPopup={showPopup} />
        <Menu />
      </div>
    );
    
