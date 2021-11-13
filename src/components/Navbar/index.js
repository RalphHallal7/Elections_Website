import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


class DownloadLink extends React.Component {
  render() {
      return (
          <a href={this.props.src} download>{this.props.children}</a>
      )
  }
}
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
          <NavLink to='/results' activeStyle>
            Results 
          </NavLink>
          
          <DownloadLink src="https://drive.google.com/file/d/1JPV4pNk2WPgcE026NjzvjgX4LFJTX3j1/view?usp=sharing">
            Election Law
          </DownloadLink>

        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/'>Sign In/Out</NavBtnLink>
        </NavBtn>
        
      </Nav>
    </>
  );
};

export default Navbar;