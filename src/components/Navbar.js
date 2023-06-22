import logo from '../images/logo.svg';
import React from 'react';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*<!-- left this comment on purpose -->*/}

        <PageLinks />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const {id, href, icon} = link
            return (
              <li key={id}>
                <a href={href} target="blank"  className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>)
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar