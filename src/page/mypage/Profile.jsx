import React from 'react';
import './Mypage.css';
import picture from './profile_img.jpg';

const Profile = (props) => {
    const {name,diary_total,diary_shared} = props.content;
    return (
        <div className='profile_box'>
            <img src={picture} alt='' style={{borderRadius:'50%', width: '113px', height: '113px'}}/>
            <div style={{display:'flex', flexDirection: 'column', padding:'20px'}}>
                <div style={{fontWeight:'bold', fontSize:'20px', marginBottom: '10px'}}>{name}</div>
                <div style={{display:'flex', justifyContent:'space-evenly', flexDirection:'rows'}}>
                    <div>
                        <span style={{fontSize:'13px', whiteSpace:'pre-wrap'}}>일기 수 </span>
                        <span style={{fontSize:'13px', color:'white'}}>{diary_total}</span>
                    </div>
                    <div>
                        <span style={{fontSize:'13px', whiteSpace:'pre-wrap'}}>                 공유한 일기 수 </span>
                        <span style={{fontSize:'13px', color:'white'}}>{diary_shared}</span>
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default Profile;
