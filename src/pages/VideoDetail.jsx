// VideoDetail.jsx (src - pages)
import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail(){
  const {videoId} = useParams(); // 넘어올 때 사용하는 이름
  console.log(videoId)
  return(
    <>
      <div>VideoDetail page</div>
      <div>Video ID: {videoId}</div>
    </>
  );
}