"use client";
import axios from "axios";
import { useState } from "react";



export default function SubIN() {
    const [msg, setMsg] = useState("")
    let email = ""
    const onHandle = (event)=>{
        email = event.target.value
    }
    const Submit = () => {

        var data = { Email: email }

        axios.post(process.env.BASE_URL+"/api/Registration", data).then((res) => {
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
                name="Email"
                onChange={onHandle}
                placeholder="Enter your mail ID"
                className="outline-none rounded-s-md p-2 w-[20vw] px-4"
                
            />
            <button onClick={Submit} value={email} type="button" className="bg-[#10377F] h-full px-10 py-2 text-white rounded-e-md">
                Subscribe
            </button>
        </div>
    )
}
