import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download>{this.props.children}</a>
        )
    }
  }

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
      <nav className="navbar">

        <div className="nav-container">

          <NavLink exact to="/" className="nav-logo">
          <img src={'https://www.usj.edu.lb/images/logousj.png'} alt='USJ' />
          </NavLink>
            
          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
                exact
                to="/list-of-voters"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                List Of Voters
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/list-of-candidats"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                List Of Candidats
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/results"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Results
              </NavLink>

            </li>

            <li className="nav-item">
            <DownloadLink src="https://drive.google.com/file/d/1JPV4pNk2WPgcE026NjzvjgX4LFJTX3j1/view?usp=sharing" >
            Election Law
          </DownloadLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

        </div>
      </nav>
  );
}

export default NavBar;