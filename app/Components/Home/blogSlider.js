"use client";

import Card from "../Cards/Card";

export default function BlogSlider() {
  // var ScrollingContainer = document.getElementById("Blog_SlideBar");
  // if(ScrollingContainer){
  //   ScrollingContainer.addEventListener("wheel", (evt) => {
  //     evt.preventDefault();
  //     ScrollingContainer.scrollLeft += evt.deltaY;
  //   });
  // }
  return (
    <div className="flex justify-end mt-36">
      <div
        id="Blog_SlideBar"
        className="w-[95%] mb-5 grid gap-5  grid-flow-col scrollbar-hide scroll-smooth overflow-scroll"
      >
        <Card />
        <Card />
        <Card />
        <Card />
    
        
      </div>
    </div>
  );
}
