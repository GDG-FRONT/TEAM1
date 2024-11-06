import React from 'react'

const Box = () => {
    const Boxes = [
        { id: 1, label: '새로운 직장의 첫 출근', text:'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus'},
        { id: 2, label: '새로운 직장의 첫 출근', text:'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus'},
        { id: 3, label: '새로운 직장의 첫 출근', text:'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus'},
    ];
    
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 26,
        marginLeft: 17,
        marginRight: 18,
    };

    const BoxStyle = {
        width: '285px',
        height: '158.89px',
        borderRadius: '5.222px',
        border: '1px solid #ccc',
        margin: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    };
    
    const textStyle = {
        fontFamily: 'Pretendard',
        fontSize: '10.44px',
        fontWeight: 400,
        lineHeight: '11.94px',
        letterSpacing: '0.02em',
        textAlign: 'left',
    };
    
    const titleStyle = {
        fontFamily: 'Manrope',
        fontSize: '13.43px',
        fontWeight: 700,
        lineHeight: '16.11px',
        letterSpacing: '0.02em',
        textAlign: 'left',
    };

    return (
        <div style={containerStyle}>
            {Boxes.map((box) => (
                <div key={box.id} style={BoxStyle}>
                    <span style={titleStyle}>{box.label}</span> 
                    <p style={textStyle}>{box.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Box;