"use client";

function handleOn() {
    document.getElementById("bodySec").style.display = "none";
    document.getElementById("InputSec").style.display = "block";
    console.log("Hello");
  
  }

export default function () {
    return (
        <div className="flex justify-center mt-10">
            <button className="bg-[#185BD8] text-[3vw] py-2 px-4 rounded-lg font-body text-white" onClick={handleOn}>Explore Solutions</button>
        </div>
    )
}
