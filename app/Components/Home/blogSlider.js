"use client";
import Arrow from "@/public/image/Home/Blog_img/Arrow.png";
import Card from "../Card/Card";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import BlogDataCard from "@/app/db/DBCardData";

export default function BlogSlider() {
  const [scroll, setScroll] = useState(0);
  var slidRef = useRef();
  let width=0;

  useEffect(() => {  
    if (slidRef.current) {
      width = 2000;
      slidRef.current.scrollLeft = scroll;
    }
  }, [scroll]);

  const Right = () => {
    if(width>scroll){
      setScroll(scroll + 300);
    }

  };

  const Left = () => {
    if(0<scroll){
      setScroll(scroll - 300);
    }

  };

  return (
    <div className="relative flex justify-end  mt-36">
      <div className="absolute left-0 pl-0  z-10 h-full flex items-center">
        <button
          onClick={Left}
          className="bg-slate-700 opacity-80  rounded-full"
        >
          <Image
            className="w-[70px] rotate-180 opacity-100"
            src={Arrow}
            alt="Arrow"
          />
        </button>
      </div>
      <div
      ref={slidRef}
        id="Blog_SlideBar"
        className=" w-full pl-20 pr-20 mb-5 grid gap-5 scroll-smooth  grid-flow-col scrollbar-hide  overflow-scroll"
      >
        {BlogDataCard.map((data, index) => {
          return (
            <Card
              key={index}
              index={index}
              heading={data.Heading}
              pera={data.pera}
              image={data.img}
            />
          );
        })}
      </div>
      <div className="absolute right-0 pr-2  z-10 h-full flex items-center">
        <button
          onClick={Right}
          className="bg-slate-700 opacity-80  rounded-full"
        >
          <Image className="w-[70px] opacity-70" src={Arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
}
