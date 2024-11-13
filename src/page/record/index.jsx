import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; //목록 번호를 가져와서 조회하기 위한 코드
import index from '../list';

function PostViewPage(props) {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => {
    return item.id == postId;
  });

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}

export default index;