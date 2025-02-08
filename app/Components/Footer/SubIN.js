"use client";
import axios from "axios";
import { useState } from "react";



export default function SubIN() {
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
        <div className="h-fit mt-1">
            <p id="MSG" className="mb-2">{msg}</p>
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
