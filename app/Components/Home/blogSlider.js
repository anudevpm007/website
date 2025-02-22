"use client";

import Card from "../Card/Card";
import { useRef,useEffect } from "react";
import BlogDataCard from "@/app/db/DBCardData";

export default function BlogSlider() {
  // var ScrollingContainer = document.getElementById("Blog_SlideBar");
  // if(ScrollingContainer){
  //   ScrollingContainer.addEventListener("wheel", (evt) => {
  //     evt.preventDefault();
  //     ScrollingContainer.scrollLeft += evt.deltaY;
  //   });
  // }
  // const myRef = useRef()
  // useEffect(()=>{
    
  //   const observer = new IntersectionObserver((entries)=>{
  //     const entry = entries[0];
  //   },{
  //     threshold:1
  //   })
  //   observer.observe(myRef.current);
  // })
  return (
    <div  className=" flex justify-end mt-36">
      <div
        id="Blog_SlideBar"
        className=" w-[95%] mb-5 grid gap-5  grid-flow-col scrollbar-hide scroll-smooth overflow-scroll"
      >
        {
          BlogDataCard.map((data ,index)=>{
            return(
              <Card key={index} index={index} heading={data.Heading} pera={data.pera} image={data.img}/>
            )
          })
        }
      </div>
    </div>
  );
}
