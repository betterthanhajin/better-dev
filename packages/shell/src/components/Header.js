import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          Better Dev Shop
        </Link>
        <nav className="nav">
          <Link to="/products">상품</Link>
          <Link to="/cart">장바구니</Link>
          <Link to="/user">계정</Link>
          <Link to="/orders">주문내역</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;