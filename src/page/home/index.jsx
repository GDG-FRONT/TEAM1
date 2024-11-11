// src/page/home/index.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the first page that loads when you access the app.</p>
      {/* mypage로 이동하는 링크 추가 */}
      <Link to="/mypage">Go to My Page</Link>
    </div>
  );
};

export default Home;
