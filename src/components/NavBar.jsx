import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">LOST</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Todos
        </NavLink>
        <NavLink to="/categoria/ropa" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Ropa
        </NavLink>
        <NavLink to="/categoria/tecnologia" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Tecnología
        </NavLink>
        <NavLink to="/categoria/hogar" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Hogar
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
