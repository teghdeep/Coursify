import React from "react";

const Header = (props) => {
  return (
    <header id="header" className="header-scrolled">
      <div className="container main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="/">
              <h2>Coursify</h2>
            </a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu sf-js-enabled sf-arrows">
              <li className="menu-active">
                <a href="/">Boards</a>
              </li>
              <li>
                <a href="/">Books</a>
              </li>
              <li>
                <a href="/">Exams</a>
              </li>
              <li>
                <a href="/">Why us?</a>
              </li>
              <li>
              <button
                  onClick={() => {
                    window.Location("/");
                  }}
                  className="form-btn"
                  style={{
                    borderRadius: "10px",
                    height: "30px",
                    lineHeight: " 0px",
                    
                  }}
                >
                  Sign Up
                </button>
                </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
