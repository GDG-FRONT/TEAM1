import React from "react";
import './home.scss';
import Group1Image from "./images/Group1.jpg";  // 이미지 파일 import
import Group2Image from "./images/Group2.jpg";  // 이미지 파일 import
import Group3Image from "./images/Group3.jpg";  // 이미지 파일 import
import Group4Image from "./images/Group4.jpg";  // 이미지 파일 import
import Group5Image from "./images/Group5.jpg";  // 이미지 파일 import
import TimeImage from "./images/Time.png";      

const Index = () => {
  return (
    <div className="main-container">
      <div className="question-section">
      <span className="greeting">안녕하세요. 근표님.</span>
        <h2>오늘 하루는<br/> 잘 보내셨나요?</h2>
        <div className="emoji-buttons">
          <button className="emoji-button"><img src={Group1Image} alt="" /></button>
          <button className="emoji-button"><img src={Group2Image} alt="" /></button>
          <button className="emoji-button"><img src={Group3Image} alt="" /></button>
          <button className="emoji-button"><img src={Group4Image} alt="" /></button>
          <button className="emoji-button"><img src={Group5Image} alt="" /></button>
        </div>
      </div>
      <p className="recent-diary-title">최근에 작성한 일기</p>
      <div className="recent-diary-container">
        <div className="diary-date">
          <img src={TimeImage} alt="time" /> 28 May 21
        </div>
        <h4 className="diary-title">새로운 직장의 첫 출근</h4>
        <p className="diary-content">
          Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at
          faucibus.
        </p>
      </div>
    </div>
  );
};

export default Index;
