import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Homepage.css'; // Import custom CSS file

const Homepage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Display 9 products per page (3 rows of 3 products each)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log('Data from API:', data);
        setAllProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const nextPage = () => {
    if ((currentPage * productsPerPage) < allProducts.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = allProducts.slice(startIndex, endIndex);

  const renderProductRows = () => {
    const rows = [];
    for (let i = 0; i < displayedProducts.length; i += 3) {
      rows.push(
        <div className="row" key={i}>
          {displayedProducts.slice(i, i + 3).map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              {renderProductCard(product)}
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  const renderProductCard = product => (
    <div className="product-card card">
      <img src={product.image} alt={product.title} className="card-img-top img-small mx-auto d-block" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );

  return (
    <div className="homepage">
      <div className="banner">
        {/* Imagine showing exciting things here */}
      </div>
      <div className="categories">
        {/* Imagine showing different categories */}
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        {renderProductRows()}
        <div className="pagination d-flex justify-content-center">
          <button onClick={prevPage} disabled={currentPage === 1} className="btn btn-secondary mr-2">
            Previous
          </button>
          <button onClick={nextPage} disabled={(currentPage * productsPerPage) >= allProducts.length} className="btn btn-secondary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
