"use client";

import axios from "axios";
import { useState } from "react";
import MobFooter from "../Components/Home/Mobile/MobFooter";
import MobileMenu from "../Components/Home/MobileMenu";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Home/Menu";



export default function page() {

    const [errmsg, seterrmsg] = useState("");

    let name;
    let email;
    let phone;
    let comname;
    let des;


    const Submit = () => {
        try {
            var err = ""
            var IndexAr = []



            var emailLabel = document.getElementById("emailIN");
            var phoneLabel = document.getElementById("phoneIN");
            var Ptag = document.getElementById('serverInfo');





            name = (document.getElementById('name').value) + "";
            email = (document.getElementById('email').value) + "";
            phone = (document.getElementById('phone').value) + "";
            comname = (document.getElementById('comname').value) + "";
            des = (document.getElementById('des').value) + "";

            var data = [name, email, phone, comname, des]


            data.map((data, index) => {

                if (data.length === 0) {
                    IndexAr.push(index);
                }
            })




            if (IndexAr.length === 0) {

                var emailValid = true
                if (email.length < 320 && email.length !== 0) {

                    if (!(email).match(/^[a-zA-Z0-9][a-zA-Z0-9._%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) && email.split("@")[0].length !== 0) {

                        emailValid = false


                    }


                    else if (((email.split("@"))[0])[(((email.split("@"))[0]).length) - 1] === "." || email[0] === "@") {

                        emailValid = false
                    } else if ((email.split("@"))[0].length < 2) {

                        emailValid = false
                    } else if (!isNaN((email.split("@"))[0][0])) {

                        emailValid = false
                    }
                    else {
                        var WDCount = 0
                        whiteDom.map((data, index) => {
                            if (((email.split("@"))[1]) === data) {
                                WDCount = WDCount + 1
                            }
                        })
                        if (WDCount === 0) {

                            emailValid = true

                        } else {
                            emailValid = false


                        }
                    }
                } else {
                    emailValid = false
                }



                if (emailValid === true) {

                    if (!(phone.length >= 7 && phone.length <= 15)) {
                        err = "Phone is Incorrect"
                        seterrmsg(err)
                        phoneLabel.style.color = "red"
                        Ptag.style.color = "red";
                    } else {
                        axios.post("/api/GetInTouch", data).then((res) => {
                            var Servererror = res.data.Servererror
                            var ServerStatus = res.data.ServerStatus

                            if (Servererror === "" || Servererror === undefined || Servererror.length === 0) {
                                err = ServerStatus
                                Ptag.style.color = "green"
                            } else {
                                err = Servererror
                                Ptag.style.color = "red"
                                console.log("Entered");

                            }
                            seterrmsg(err)



                        })

                    }

                } else {
                    err = "email is Incorrect"
                    seterrmsg(err)

                    emailLabel.style.color = "red"
                    if (!(phone.length >= 7 && phone.length <= 15)) {
                        err = "Email and Phone is Incorrect"
                        seterrmsg(err)
                        phoneLabel.style.color = "red"
                        Ptag.style.color = "red";
                    }
                }
            } else {
                Ptag.style.color = "red"
                err = "Missing on the form"


                if (IndexAr.includes(1) && IndexAr.includes(2)) {

                    emailLabel.style.color = "red"

                    phoneLabel.style.color = "red"

                    err = "Fill the Email and Phone"
                } else if (IndexAr.includes(1)) {
                    err = "Fill the Email filed"
                    emailLabel.style.color = "red"

                }
                else if (IndexAr.includes(2)) {
                    err = "Fill the Phone filed"
                    phoneLabel.style.color = "red"

                }
                seterrmsg(err)

            }


        } catch (error) {
            seterrmsg("Something wrong with registration process")
        }

    }

    function handle() {
        document.getElementById("bodySec").style.display = "block";
        document.getElementById("InputSec").style.display = "none";
    }

    return (
        <div>
            <Menu />
            <MobileMenu />
            <div className=" flex justify-center w-[95%] py-14 rounded-xl bg-white mt-10">
                <div className="md:w-[85%] w-[90%] flex justify-start">
                    <div className="md:w-[75%] sm:md:w-[95%] w-[100%]">
                        <div className=" text-[5vw] md:text-[3.5vw] lg:text-[3vw] font-headingSemiBold text-[#185BD8]">
                            Let's Partner in Cybersecurity
                        </div>
                        <p className="mb-9 font-body">
                            We believe in collaborative defense. Connect with our team of experts to discuss your unique security challenges and find the right solutions.
                        </p>
                        <p id="serverInfo" className="mb-9 font-body">{errmsg}</p>
                        <div className="mt-20">
                            <form method="post">
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="Name" className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[20px] font-body">Enter your Name</label>
                                    <input id="name" className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[20px] border-[#000000ce]" type="text" name="Name" />
                                </div>
                                <div className="flex flex-col mb-10">
                                    <label id="emailIN" htmlFor="email" className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[20px] font-body">Enter your Email</label>
                                    <input id="email" className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[20px] border-[#000000ce]" type="email" name="Name" />
                                </div>
                                <div className="flex flex-col mb-10">

                                    <label id="phoneIN" htmlFor="phone" className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[20px] font-body">Enter your Phone Number</label>
                                    <input id="phone" className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[20px] border-[#000000ce]" type="number" name="phone" />


                                </div>
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="Cname" className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[20px] font-body">Enter your Company Name</label>
                                    <input id="comname" className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[20px] border-[#000000ce]" type="text" name="Cname" />
                                </div>
                                <div className="flex flex-col mb-10">
                                    <label htmlFor="des" className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[20px] font-body">Enter your Designation</label>
                                    <input id="des" className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[20px] border-[#000000ce]" type="text" name="des" />
                                </div>
                                <div>
                                    <button className="mt-1 bg-[#185BD8] rounded-md py-3 text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[20px] font-body text-white px-14" onClick={Submit} type="button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <Footer />
            </div>
            <div className="md:hidden">
                <MobFooter />
            </div>
        </div>
    )
}
