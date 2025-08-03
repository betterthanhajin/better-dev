import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

// 마이크로 프론트엔드 앱들을 동적으로 로드
const ProductApp = React.lazy(() => import('product/ProductApp'));
const CartApp = React.lazy(() => import('cart/CartApp'));
const UserApp = React.lazy(() => import('user/UserApp'));
const OrderApp = React.lazy(() => import('order/OrderApp'));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<div className="loading">로딩중...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/*" element={<ProductApp />} />
              <Route path="/cart" element={<CartApp />} />
              <Route path="/user/*" element={<UserApp />} />
              <Route path="/orders/*" element={<OrderApp />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;