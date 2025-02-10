// "use client";

// function handleOn() {
//     document.getElementById("bodySec").style.display = "none";
//     document.getElementById("InputSec").style.display = "block";
//     console.log("Hello");
  
//   }

import Link from "next/link"

export default function () {
    return (
        <div className="flex justify-center mt-10">
            {/* <button className="bg-[#185BD8] py-4 px-6 rounded-lg font-body text-white" onClick={handleOn}>Explore Solutions</button> */}
            <Link className="bg-[#185BD8] py-4 px-6 rounded-lg font-body text-white" href={"/Registration"} >Explore Solutions</Link>
        </div>
    )
}
