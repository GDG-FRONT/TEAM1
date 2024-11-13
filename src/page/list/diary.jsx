// Diary.js
import React from 'react';
import Box from './list_box';

const diaries = [
  {
    id: 1,
    title: '새로운 프로젝트 첫 시작',
    date: '28 May 24',
    content: 'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus',
  },
  {
    id: 2,
    title: '프로젝트 2일차 ',
    date: '29 May 24',
    content: 'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus',
  },
  {
    id: 3,
    title: '프로젝트 3일차',
    date: '30 May 24',
    content: 'Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus',
  },
];

function Diary() {
  return (
    <div className='diary'>
      <Box diaryList={diaries} />
    </div>
  );
}

export default Diary;