import React from "react";
import Diary from "./Diary";
import Profile from "./Profile"
import "./Mypage.css";

const index = () => {
  const profile_list={
    name:'브리러버_82', diary_total : 3, diary_shared : 12
  };
  const diary_data=[
    {time: 'time', title:'title',content:'content'},
    {time: 'time2', title:'title2',content:'content2'},
    {time: 'time3', title:'title3',content:'content3'},
    {time: 'time4', title:'title4',content:'content4'},
    {time: 'time5', title:'title5',content:'content5'},
    {time: 'time6', title:'title6',content:'content6'},
    {time: 'time7', title:'title7',content:'content7'},

  ]

  return <div className="mypage">
    <Profile content={profile_list}/>
    <span style={{color:"#737373",marginLeft: '7px',fontSize:'25px',fontWeight:'bold'}}>내가 작성한 일기</span>
    <div className="diary_grid">
      {
        diary_data.map((data)=>(<Diary data={data}/>))
      }
    </div>
      
  </div>;
};

export default index;
