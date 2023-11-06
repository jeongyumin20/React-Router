// Video.jsx (src - pages)
import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Video(){
  const navigate = useNavigate();
  const [text, setText] = useState('')
  
  const handleChange = (e) => {
    setText(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // submit form이 관리
    setText(''); // submit 일어나면 기존 text는 초기화
    // text 파라미터를 /video/text 파라미터 전송
    navigate(`/video/${text}`); // navigate("/video/" + text);
  }

  return(
    <>
      <div>Video page</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="videoId" placeholder="Video Id: " value={text} onChange={handleChange}/>
      </form>
    </>
  );
}