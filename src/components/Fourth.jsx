import React from "react";

import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  useParams,
} from "react-router-dom";

const Products = () => {
  return (
    <div>
      <p>
        <Link to="/product/1">Товар 1</Link>
      </p>
      <p>
        <Link to="/product/2">Товар 2</Link>
      </p>
      <p>
        <Link to="/product/3">Товар 3</Link>
      </p>
    </div>
  );
};

const Product = (props) => {
  let { id } = useParams();
  return <div>Товар {id}</div>;
};

const Fourth = () => {
  return (
    <div>
      <h2>Четвертая задача:</h2>

      <BrowserRouter>
        <nav>
          <Link to="/home">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/products">Товары</Link>
        </nav>
        <Routes>
          <Route exact path="/home" element={<p>Главная</p>} />
          <Route exact path="/about" element={<p>О нас</p>} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Fourth;
