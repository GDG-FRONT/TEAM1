import React, { useState, useRef } from "react";
import "./record.scss";
import { ReactComponent as Arrow } from "./image/arrow.svg";
import { ReactComponent as Setting } from "./image/setting.svg";
import { ReactComponent as Correction } from "./image/correction.svg";
import { ReactComponent as Delete } from "./image/delete.svg";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef(null);

  return (
    <div className="detail">
      <div className="button">
        <p className="arrow"><button><Arrow /></button></p>
        <p className="setting"><button onClick={() => setModalOpen(true)}><Setting /></button></p>
      </div>

      {
        modalOpen && (
        <div className={'modal-container'} ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <div className={'modal-content'} onClick={e => e.stopPropagation()}>
            <p className="correction"><button><Correction /></button>수정</p>
            <p className="delete"><button><Delete /></button>삭제</p>
          </div>
        </div>
      )}

      <div>
        <textarea className="post"></textarea>
      </div>
      <div className="post_title">
        새로운 직장 첫 출근
      </div>
      <div className="post_detail">
      한글이랑 영어랑 들어가는 느낌이 다르기 때문에 영어로 일기를 쓰지 않는 이상 한글 더미가 들어가는게 더 좋을 것 같습니다. 
      한글이랑 영어랑 들어가는 느낌이 다르기 때문에 영어로 일기를 쓰지 않는 이상 한글 더미가 들어가는게 더 좋을 것 같습니다.
      </div>
    </div>
  )
};

export default Index;