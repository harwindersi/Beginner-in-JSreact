 import React from 'react'
 import PropTypes from 'prop-types'
 
 function Navbar(props) {
 
   return (
<div>


       <nav className={`navbar navbar-expand-lg navbar-${props.mode==="dark"?"dark":"light"} bg-${props.mode==="dark"?"dark":"light"}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.about}<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.link}</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className="form-check form-switch">
  <input className ="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.changemode}>enable dark mode</label>
</div>
  </div>
</nav>
  </div>
   )
   }
   Navbar.propTypes={
           title:PropTypes.string.isRequired,
           about:PropTypes.string.isRequired,
           link:PropTypes.string,
  }
  Navbar.defaultProps={
    title:"Not defined",
    about:"Not defined",
    link:"not defined"
  }
 export default Navbar;