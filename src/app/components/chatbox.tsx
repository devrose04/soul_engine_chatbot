"use client"
import { useState } from "react";
export type UrlType =
  {
    text: string;
    url: string;
  }

export default function Chatbox(props: {content: String, state: Number, urls: UrlType[]}) {
  
    const currentTimeString = getCurrentTimeString();

    return <div className="flex flex-col">

      <div className="relative inline-block p-3 md:p-5 px-4 mg:px-6 max-w-[400px]">
        <div className="absolute inset-0">
          <img src="/img/chatbox.png" className={`w-full h-full ${props.state ===1 || props.state ===2?"flip": ""}`} />
        </div>
        <p className={`text-[14px] md:text-[16px] ${props.state === 0? `pl-4`:``} relative bg-transparent break-words overflow-wrap break-word`}>
          {props.content}
        </p> 
      </div>
      {props?.urls?.map((val, index) => <div className={`w-full ${props.state?"hidden": ""}` }>
        <a className="p-1 mt-1 ml-3 text-[12px] md:text-[14px] text-[#8226BF] border-[#8226BF] border-2 rounded-2xl float-left flex gap-1" href={val.url} target="_blank">{val.text} 
          <img src="/img/linkbtn.svg" alt="" />
        </a>
      </div>)}
      
      <div className="w-full ml-3">
        <p className="text-[12px] text-[#7D7D7D]">Read {currentTimeString}</p>
      </div>
      
    </div>
}

export const getCurrentTimeString = () => {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}