import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/usj.svg')} alt='USJ' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/list-of-voters' activeStyle>
            List Of Voters
          </NavLink>
          <NavLink to='/list-of-candidats' activeStyle>
            List Of Candidats 
          </NavLink>

          <NavLink to='/election-law' activeStyle>
            Election Law
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;