import React from 'react';
import { ReactComponent as ClockIcon } from './Clock.svg';
import './list.scss';  // SCSS 파일 불러오기

const Box = () => {
    const Boxes = [
        { id: 1, label: '새로운 직장의 첫 출근', text: 'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus', date: '28 May 21'},
        { id: 2, label: '새로운 직장의 첫 출근', text: 'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus', date: '28 May 21' },
    ];

    return (
        <div className="big-container">
            {Boxes.map((box) => (
                <div key={box.id} className="box-style">
                    <span className="small-container">
                        <span className="small-style">
                            <ClockIcon width="10px" height="10px" />
                            <span className="small-text-style">{box.date}</span>
                        </span>
                        <span className="title-style">{box.label}</span>
                        <p className="text-style">{box.text}</p>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Box;