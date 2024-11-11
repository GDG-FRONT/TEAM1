// src/page/mypage/index.jsx
import React from "react";
import "./mypage.scss"; // 스타일 파일 임포트, 별도로 정의 필요

const Mypage = () => {
  return (
    <div className="mypage-container">
      <div className="profile-card">
        <img
          src="./images/profile.jpg"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h2>브리러버_82</h2>
          <span className="text-container">
          <p className="head">일기 수</p>
          <p className="tail">3</p>
          <p className="head">공유한 일기 수</p>
          <p className="tail">12</p>
          </span>
        </div>
      </div>

      <h2 className="section-title">내가 작성한 일기</h2>
      <div className="diary-list">
        {[1, 2, 3, 4].map((item) => (
          <div className="diary-card" key={item}>
            <div className="diary-date">🗓️ 28 May 21</div>
            <h3>새로운 직장의 첫 출근</h3>
            <p>
              Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at
              faucibus.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mypage;
