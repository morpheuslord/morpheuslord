// Header.jsx
import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import AnimatedText from './MainLogoAnimation'; // Make sure this path is correct
import ComputerModel from './ComputerModel'; // Import the new component

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="upper-header">
          <h5>Hello I'm</h5>
          <AnimatedText />
          <h5 className="text-light">Fresher Security Engineer</h5>
          <CTA />
        </div>
        <div className="lower-header">
          <HeaderSocials />
        </div>
        <div className="computer-model">
          <ComputerModel /> {/* Add the ComputerModel component */}
        </div>
      </div>
    </header>
  );
}

export default Header;
