import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavbar.css';
const SideNavLink = (props) => {
  return (
    <>
      <a className='links '>
        <div className='flex flex-row justify-start items-center'>
          {props.icon}
          <NavLink className='mx-8' to={props.to} activeClassName='activeClass'>
            {props.name}
          </NavLink>
        </div>
      </a>
    </>
  );
};
export default SideNavLink;
