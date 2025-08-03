import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Better Dev E-commerce</h1>
      <p>마이크로 프론트엔드 아키텍처로 구현된 이커머스 플랫폼</p>
      <div className="features">
        <div className="feature">
          <h3>🛍️ 상품 관리</h3>
          <p>독립적인 상품 앱</p>
        </div>
        <div className="feature">
          <h3>🛒 장바구니</h3>
          <p>실시간 장바구니 상태 동기화</p>
        </div>
        <div className="feature">
          <h3>👤 사용자 관리</h3>
          <p>인증 및 프로필 관리</p>
        </div>
        <div className="feature">
          <h3>📦 주문 관리</h3>
          <p>주문 및 결제 처리</p>
        </div>
      </div>
    </div>
  );
}

export default Home;