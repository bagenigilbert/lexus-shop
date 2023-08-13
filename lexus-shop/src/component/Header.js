import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        setCategories(json);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const toggleAccountDropdown = () => {
    setAccountDropdown(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="logo">Lexus-Shop-Logo</div>
          </div>
          <div className="col-md-5">
            <div className="search-bar">
              <input type="text" className="form-control" placeholder="Search products..." />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
          <div className="col-md-4">
            <nav className="navigation">
              <ul className="nav">
                <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    onClick={toggleAccountDropdown}
                  >
                    Categories
                  </a>
                  <div className={`dropdown-menu ${accountDropdown ? 'show' : ''}`}>
                    {categories.map(category => (
                      <a key={category} href={`/category/${category}`} className="dropdown-item">
                        {category}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="nav-item"><a href="/cart" className="nav-link">Cart</a></li>
                <li className={`nav-item dropdown ${accountDropdown ? 'show' : ''}`}>
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    onClick={toggleAccountDropdown}
                  >
                    Account
                  </a>
                  <div className={`dropdown-menu ${accountDropdown ? 'show' : ''}`}>
                    <a href="/login" className="dropdown-item">Login</a>
                    <a href="/register" className="dropdown-item">Register</a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
