"use client"
import axios from "axios";
import { useState } from "react";

export default function FooterSub() {
    const [msg, setMsg] = useState("")
    const Submit = () => {
        var email = document.getElementById('Sub').value;
        axios.post("/api/Registration", { Email: email }).then((res) => {
            console.log((res.data.error));
            if ((res.data.error) === 200) {
                document.getElementById("MSG").style.color = "green"

            } else {
                document.getElementById("MSG").style.color = "red"
            }
            setMsg((res.data.status))
        })

    }
    return (
        <div className="flex justify-center flex-col md:justify-start">
            <p id="MSG" className="mt-2">{msg}</p>
            <div className="mt-2 w-full md:w-[60%] grid grid-cols-12 ">
                <div className="col-span-8">
                    <input id="Sub" className="w-full py-2 md:py-4 rounded-s-md font-body px-3" type="email" placeholder="Enter your mail ID" />
                </div>
                <div className="col-span-4">
                    <button onClick={Submit} className="w-[100%] py-2 md:py-4 rounded-e-md text-white font-body bg-[#10377F]">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
