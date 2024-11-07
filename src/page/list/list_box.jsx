import React from 'react'
import { ReactComponent as ClockIcon } from './Clock.svg';
const Box = () => {
    const Boxes = [
        { id: 1, label: '새로운 직장의 첫 출근', text: 'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus', date: '28 May 21'},
        { id: 2, label: '새로운 직장의 첫 출근', text: 'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus', date: '28 May 21' },
        //시계랑 날짜 적용 안함 
    ];

    const BigContainerStyle = { //전체 컨테이너
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 26,
        marginLeft: '10px',
        marginRight: '10px',
        
    };
    //박스에서 밑 스타일들을 적용할 컨테이너 적용 
    const SmallContainer = {
        paddingTop: '15.89px',
        paddingLeft: '16px',
        paddingRight: '16px',
        display: 'block',
    }
    const SmallStyle = { //조그만한 박스 시계랑 날짜 써 있는 것 
        display: 'flex',
        flexDirection: 'row',
        width: '70.78px',
        height: '17.98px',
        padding: '1.49px 5.97px',
        borderRadius: '2.98px',
        opacity: 1,
        backgroundColor: '#E3AF38',
        gap: '2.98px',
        alignItems: 'center',
        justifyContent: 'flex-start',


    };
    const SmallStyleLayout = { // 박스 뒤쪽 레이아웃
        width: '78.68px',
        height: '17.9px',
        top: '220.89px',
        left: '33px',
        gap: '2.98px',
        opacity: 1,
    };

    const BoxStyle = { //각 박스의 스타일 
        width: '285px',
        height: '158.89px',
        borderRadius: '5.222px',
        border: '1px solid #ccc',
        margin: '10px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        
        
    };
    const SmallTextStyle = {//작은 박스에 날짜 쓰는 폰트 스타일 
        fontFamily: 'Pretendard',
        fontSize: '9.7px',
        fontWeight: 400,
        lineHeight: '14.55px',
        textAlign: 'left',

    };
    const TextStyle = { // 내용 스타일
        fontFamily: 'Pretendard',
        fontSize: '10.44px',
        fontWeight: 400,
        lineHeight: '11.94px',
        letterSpacing: '0.02em',
        textAlign: 'left',
    };

    const TitleStyle = { //제목 스타일 
        fontFamily: 'Manrope',
        fontSize: '13.43px',
        fontWeight: 700,
        lineHeight: '16.11px',
        letterSpacing: '0.02em',
        textAlign: 'left',
    };

    return (
        <div style={BigContainerStyle}>
            {Boxes.map((box) => (
                <div key={box.id} style={BoxStyle}>
                    <span style={SmallContainer}>
                        <span style={SmallStyleLayout}>
                            <div style={SmallStyle}>
                                <ClockIcon width="10px" height="10px" />
                                <span style={SmallTextStyle}>
                                {box.date }
                                </span>
                            </div>
                        </span>
                        <span style={TitleStyle}>{box.label}</span>
                        <p style={TextStyle}>{box.text}</p>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Box;