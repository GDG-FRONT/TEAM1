import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Home } from "../assets/footer/home.svg";
import { ReactComponent as Activehome } from "../assets/footer/Activehome.svg";
import { ReactComponent as List } from "../assets/footer/list.svg";
import { ReactComponent as Activelist } from "../assets/footer/Activelist.svg";
import { ReactComponent as Edit } from "../assets/footer/edit.svg";
import { ReactComponent as Activeedit } from "../assets/footer/Activeedit.svg";
import { ReactComponent as User } from "../assets/footer/user.svg";
import { ReactComponent as Activeuser } from "../assets/footer/Activeuser.svg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <div className="footer-container">
      <div className="footer-item-container">
        <div
          className={`footer-item footer-item-left ${
            path === "/" ? "active" : ""
          }`}
          onClick={() => {
            navigate("/");
          }}
        >
          {path === "/" ? <Activehome /> : <Home />}홈
        </div>
        <div
          className={`footer-item  ${path === "/record" ? "active" : ""}`}
          onClick={() => {
            navigate("/record");
          }}
        >
          {path === "/record" ? <Activeedit /> : <Edit />}
          일기작성
        </div>
        <div
          className={`footer-item ${path === "/list" ? "active" : ""}`}
          onClick={() => {
            navigate("/list");
          }}
        >
          {path === "/list" ? <Activelist /> : <List />}
          일기목록
        </div>

        <div
          className={`footer-item footer-item-right ${
            path === "/mypage" ? "active" : ""
          }`}
          onClick={() => {
            navigate("/mypage");
          }}
        >
          {path === "/mypage" ? <Activeuser /> : <User />}
          마이페이지
        </div>
      </div>
    </div>
  );
};

export default Footer;
