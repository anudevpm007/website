"use client";
import axios from "axios";


const Submit = ()=>{
    var email = document.getElementById('Sub').value;
    axios.post("/api/SUB",{Email:email}).then((res)=>{
        console.log((res));
    })
}

export default function SubIN() {
    return (
        <div className="h-fit mt-4">
            <input
                type="text"
                placeholder="Enter your mail ID"
                className="outline-none rounded-s-md p-2 w-[20vw] px-4"
                id="Sub"
            />
            <button onClick={Submit} type="button" className="bg-[#10377F] h-full px-10 py-2 text-white rounded-e-md">
                Subscribe
            </button>
        </div>
    )
}
