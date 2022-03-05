import React from 'react';
import './Navbar.css'
function Navbar() {
  return (
    <div>
      {/* <nav>
        <ul className="lists">
          <li className="logo">
            <img src="fresh-logo.png" />
          </li>
          <li className="nav-list">
            <div class="nav-img">
              <img className="nav-img-logo" src="fish.png" />
              <br></br>
              <a href="#">Fish Seafood</a>
            </div>
          </li>
          <li className="nav-list">
            <div class="nav-img">
              <img className="nav-img-logo" src="chicken.png" />
              <br></br>
              <a href="#">Poultry</a>
            </div>
          </li>
          <li className="nav-list">
            <div class="nav-img">
              <img className="nav-img-logo" src="mutton.png" />
              <br></br>
              <a href="#">Mutton</a>
            </div>
          </li>
          <li className="nav-list">
            <div class="nav-img">
              <img className="nav-img-logo" src="steaks.png" />
              <br></br>
              <a href="#">Steaks & Fillet</a>
            </div>
          </li>
          <li className="nav-list">
            <div class="nav-img">
              <img className="nav-img-logo" src="readytocook.png" />
              <br></br>
              <a href="#">Ready to Cook</a>
            </div>
          </li>
        </ul>
                 
        <div className="search-bar">
          <input type="search" placeholder=" Search..." />
          <div className="cart">
            <i class="fas fa-cart-plus fa-2x"></i>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="fresh-logo.png" className='logo'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="#">Fish Seafood</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Poultry</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mutton</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Steaks & Fillet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ready to Cook</a>
        </li>
        
        <li class="nav-item">
        <div className='cart'>
        <i class="fas fa-cart-plus fa-2x"></i>
        </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success " type="submit">Search</button>
        
      </form>
      
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
