"use client";


import axios from "axios";
import { useState } from "react";
import Phone_Code from "./CountryCode";

export default function GetInTouch() {

    const [err, setError] = useState("");

    let name;
    let email;
    let phone;
    let comname;
    let des;
    let country;

    const Isempty = () => {
        dataAr.map((data, inde) => {
            if (data.length === 0) {

            }
        })

    }

    const Submit = () => {
        console.log("Update 0.1v");

        name = (document.getElementById('name').value) + "";
        email = (document.getElementById('email').value) + "";
        phone = (document.getElementById('phone').value) + "";
        comname = (document.getElementById('comname').value) + "";
        des = (document.getElementById('des').value) + "";
        country = (document.getElementById('CountryCodeSelect').value) + "";



         [name, email, phone, country, comname, des, country]

       
        var data = {
            Name: name,
            Email: email,
            Phone: phone,
            Code: Phone_Code[country].country,
            ComName: comname,
            Des: des
        }
        // var CheckCount = 0
        let CheckOut;
        var Phone_count = Phone_Code[country].phone_number_digits;
        if (Phone_count === 100) {
            CheckOut = (phone.length === 11 || phone.length === 12)
        }
        else {
            CheckOut = (Phone_count === phone.length)
        }


        if (CheckOut === true) {
            document.getElementById("phone").style.color = "black";
            document.getElementById("phoneIN").style.color = "black";
            console.log("3000");

            axios.post("/api/post", data).then((res) => {
                console.log((res.data).status);
                var resStatus = (res.data).status;

                if (resStatus.includes("502")) {
                    document.getElementById("serverInfo").style.color = "red";
                    setError("Please try later the server has some problem")
                }


                document.getElementById("email").style.color = "black";
                document.getElementById("emailIN").style.color = "black";

                if (!resStatus.includes("200")) {
                    document.getElementById("serverInfo").style.color = "red";
                    if (resStatus.includes("P")) {
                        if (resStatus.includes("E")) {
                            setError("The Entered Email and Phone Number are already using")
                            document.getElementById("email").style.color = "red";
                            document.getElementById("emailIN").style.color = "red";
                            document.getElementById("phone").style.color = "red";
                            document.getElementById("phoneIN").style.color = "red";
                        }
                        else {
                            setError("The Entered Phone Number are already using")
                            document.getElementById("phone").style.color = "red";
                            document.getElementById("phoneIN").style.color = "red";
                            document.getElementById("email").style.color = "black";
                            document.getElementById("emailIN").style.color = "black";
                        }
                    } else if (resStatus.includes("E")) {
                        setError("The Entered Email are already using")
                        document.getElementById("email").style.color = "red";
                        document.getElementById("emailIN").style.color = "red";
                        document.getElementById("phone").style.color = "black";
                        document.getElementById("phoneIN").style.color = "black";
                    } else if (resStatus.includes("EW")) {
                        setError("The Entered Email is Wrong")
                        document.getElementById("email").style.color = "red";
                        document.getElementById("emailIN").style.color = "red";
                        document.getElementById("phone").style.color = "black";
                        document.getElementById("phoneIN").style.color = "black";
                    }
                } else if (!resStatus.includes("502") && resStatus.includes("200")) {
                    setError("You are successfully registered")
                    document.getElementById("serverInfo").style.color = "green";
                    document.getElementById("email").style.color = "black";
                    document.getElementById("emailIN").style.color = "black";
                    document.getElementById("phone").style.color = "black";
                    document.getElementById("emailIN").style.color = "black";
                }
            }).catch((err) => {
                setError("Something error from Server")
                document.getElementById("serverInfo").style.color = "red";
            })
        } else {
            document.getElementById("serverInfo").style.color = "red";
            setError("Something wrong with Phone Number")
            document.getElementById("phone").style.color = "red";
            document.getElementById("phoneIN").style.color = "red";

        }
    }

    function handle() {
        document.getElementById("bodySec").style.display = "block";
        document.getElementById("InputSec").style.display = "none";
    }
    return (
        <div id="InputSec" className=" hidden absolute backdrop-blur-sm z-10  bg-[rgba(0,0,0,0.5)] h-[1200px] w-full ">
            <div className="w-full h-screen flex justify-center  relative">
                <button className=" w-full h-full " onClick={handle}></button>

                <div className="absolute z-[1] flex justify-center w-[55%] py-14 rounded-xl bg-white mt-10">
                    <div className="w-[80%]">
                        <div className=" text-[2vw] font-headingSemiBold text-[#185BD8]">
                            Let's Partner in Cybersecurity
                        </div>
                        <p className="mb-9 font-body">
                            We believe in collaborative defense. Connect with our team of experts to discuss your unique security challenges and find the right solutions.
                        </p>
                        <p id="serverInfo" className="mb-9 font-body">{err}</p>
                        <div className="mt-20">
                            <form method="post">
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="Name" className="text-[1vw] font-body">Enter your Name</label>
                                    <input id="name" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="text" name="Name" />
                                </div>
                                <div className="flex flex-col mb-10">
                                    <label id="emailIN" htmlFor="email" className="text-[1vw] font-body">Enter your Email</label>
                                    <input id="email" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="email" name="Name" />
                                </div>
                                <div className="flex justify-between flex-row items-center mb-10">
                                    <div className="w-[70%] flex flex-col ">
                                        <label id="phoneIN" htmlFor="phone" className="text-[1vw] font-body">Enter your Phone Number</label>
                                        <input id="phone" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="number" name="phone" />
                                    </div>
                                    <div className="w-[28%] ">
                                        <select className=" mt-5 w-full h-14 outline-none font-headingSemiBold bg-[#185BD8] rounded-lg px-1 text-white" name="CountryCodeSelect" id="CountryCodeSelect" >
                                            {
                                                Phone_Code.map((Data, Index) => {
                                                    return (<option className="outline-none" key={Index} value={Index}>{Data.country_code} {Data.country}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="Cname" className="text-[1vw] font-body">Enter your Company Name</label>
                                    <input id="comname" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="text" name="Cname" />
                                </div>
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="des" className="text-[1vw] font-body">Enter your Designation</label>
                                    <input id="des" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="text" name="des" />
                                </div>
                                <div>
                                    <button className="mt-16 bg-[#185BD8] rounded-md py-3 text-[1.1vw] text-white font-headingSemiBold px-14" onClick={Submit} type="button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
