"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import AddSym from "@/public/image/Services/AddSym.png";
import MinSym from "@/public/image/Services/MinSym.png";
import Rectangle from "@/public/image/Services/R_Rectangle.png";

var i = 0;

export default function QA({Q,A}) {
  const [QAVisible, setQAVisible] = useState(false);
  
  const Show = () => {
    if(QAVisible){
      setQAVisible(false)
    }else{
      setQAVisible(true)
    }
    
  };
  return (
    <div>
      <div className="grid grid-cols-12 mt-10 md:mb-0 mb-5">
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src={Rectangle}
            className="md:w-[1.5vw] md:h-[1.8vw] "
            alt="Rectagle"
          />
        </div>
        <div className= "text-[2.5vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[1.3vw] font-body flex items-center col-span-10">
          {Q}
        </div>
        <div className="flex items-start">
          <button  className="bg-[#185BD8] rounded-full" onClick={Show}>
            {
                QAVisible?
                <Image src={MinSym} className="w-[100%] md:w-[2.3vw]" alt="Add" />
                :
                <Image src={AddSym} className="w-[100%] md:w-[2.3vw]" alt="Add" />
            }
          </button>
        </div>
      </div>
      { QAVisible?
        <div className="flex justify-center mt-3  md:mt-5">
          <p className="w-[85%] font-body xl:text-[0.9vw] mb-5 lg:text-[1.5vw] md:text-[1.8vw] text-[2.5vw]">
            {A}
          </p>
        </div>
        :null
      }
    </div>
  );
}
