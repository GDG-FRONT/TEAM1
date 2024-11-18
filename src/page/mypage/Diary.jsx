import React from 'react';
import { IoTime } from "react-icons/io5";
import './Mypage.css';

const Diary = (props) => {
    const {time,title,content}=props.data;
    return (
        <div className='diary_box'>
            <div style={{width: '60%',backgroundColor: '#E3AF38',display:'flex', flexDirection: 'row',alignItems:'center',paddingLeft:'7px'}}>
                <IoTime />
                <span>{time}</span>
            </div>
            <span style={{fontSize:'18px',fontWeight:'bold'}}>{title}</span>
            <span>{content}</span>
        </div>
    );
};

export default Diary;