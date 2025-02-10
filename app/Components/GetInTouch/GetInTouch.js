// "use client";
// import whiteDom from "@/app/api/Registration/whiteList";

// import axios from "axios";
// import { useState } from "react";
// import Phone_Code from "./CountryCode";

// export default function GetInTouch() {

//     const [errmsg, seterrmsg] = useState("");

//     let name;
//     let email;
//     let phone;
//     let comname;
//     let des;

//     // const Isempty = () => {
//     //     dataAr.map((data, inde) => {
//     //         if (data.length === 0) {

//     //         }
//     //     })

//     // }

//     const Submit = () => {
//         try {
//             var err = ""
//             var IndexAr = []



//             var emailLabel = document.getElementById("emailIN");
//             var phoneLabel = document.getElementById("phoneIN");

//             var Ptag = document.getElementById('serverInfo');





//             name = (document.getElementById('name').value) + "";
//             email = (document.getElementById('email').value) + "";
//             phone = (document.getElementById('phone').value) + "";
//             comname = (document.getElementById('comname').value) + "";
//             des = (document.getElementById('des').value) + "";

//             var data = [name, email, phone, comname, des]


//             data.map((data, index) => {

//                 if (data.length === 0) {
//                     IndexAr.push(index);
//                 }
//             })




//             if (IndexAr.length === 0) {

//                 var emailValid = true
//                 if (email.length < 320 && email.length !== 0) {

//                     if (!(email).match(/^[a-zA-Z0-9][a-zA-Z0-9._%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) && email.split("@")[0].length !== 0) {

//                         emailValid = false


//                     }


//                     else if (((email.split("@"))[0])[(((email.split("@"))[0]).length) - 1] === "." || email[0] === "@") {

//                         emailValid = false
//                     } else if ((email.split("@"))[0].length < 2) {

//                         emailValid = false
//                     } else if (!isNaN((email.split("@"))[0][0])) {

//                         emailValid = false
//                     }
//                     else {
//                         var WDCount = 0
//                         whiteDom.map((data, index) => {
//                             if (((email.split("@"))[1]) === data) {
//                                 WDCount = WDCount + 1
//                             }
//                         })
//                         if (WDCount === 0) {

//                             emailValid = true

//                         } else {
//                             emailValid = false


//                         }
//                     }
//                 } else {
//                     emailValid = false
//                 }



//                 if (emailValid === true) {

//                     if (!(phone.length >= 7 && phone.length <= 15)) {
//                         err = "Phone is Incorrect"
//                         seterrmsg(err)
//                         phoneLabel.style.color = "red"
//                         Ptag.style.color = "red";
//                     } else {
//                         axios.post("/api/GetInTouch", data).then((res) => {
//                             var Servererror = res.data.Servererror
//                             var ServerStatus = res.data.ServerStatus

//                             if (Servererror === "" || Servererror === undefined || Servererror.length === 0) {
//                                 err = ServerStatus
//                                 Ptag.style.color = "green"
//                             } else {
//                                 err = Servererror
//                                 Ptag.style.color = "red"
//                                 console.log("Entered");

//                             }
//                             seterrmsg(err)



//                         })

//                     }

//                 } else {
//                     err = "email is Incorrect"
//                     seterrmsg(err)

//                     emailLabel.style.color = "red"
//                     if (!(phone.length >= 7 && phone.length <= 15)) {
//                         err = "Email and Phone is Incorrect"
//                         seterrmsg(err)
//                         phoneLabel.style.color = "red"
//                         Ptag.style.color = "red";
//                     } 
//                 }
//             } else {
//                 Ptag.style.color = "red"
//                 err = "Missing on the form"


//                 if (IndexAr.includes(1) && IndexAr.includes(2)) {

//                     emailLabel.style.color = "red"

//                     phoneLabel.style.color = "red"

//                     err = "Fill the Email and Phone"
//                 } else if (IndexAr.includes(1)) {
//                     err = "Fill the Email filed"
//                     emailLabel.style.color = "red"

//                 }
//                 else if (IndexAr.includes(2)) {
//                     err = "Fill the Phone filed"
//                     phoneLabel.style.color = "red"

//                 }
//                 seterrmsg(err)

//             }


//         } catch (error) {
//             seterrmsg("Something wrong with registration process")
//         }

//     }

//     function handle() {
//         document.getElementById("bodySec").style.display = "block";
//         document.getElementById("InputSec").style.display = "none";
//     }
//     return (
//         <div id="InputSec" className=" hidden absolute backdrop-blur-sm z-10  bg-[rgba(0,0,0,0.5)] h-[1200px] w-full ">
//             <div className="w-full h-screen flex justify-center  relative">
//                 <button className=" w-full h-full " onClick={handle}></button>

//                 <div className="absolute z-[1] flex justify-center w-[55%] py-14 rounded-xl bg-white mt-10">
//                     <div className="w-[80%]">
//                         <div className=" text-[2vw] font-headingSemiBold text-[#185BD8]">
//                             Let's Partner in Cybersecurity
//                         </div>
//                         <p className="mb-9 font-body">
//                             We believe in collaborative defense. Connect with our team of experts to discuss your unique security challenges and find the right solutions.
//                         </p>
//                         <p id="serverInfo" className="mb-9 font-body">{errmsg}</p>
//                         <div className="mt-20">
//                             <form method="post">
//                                 <div className="flex flex-col mb-10">
//                                     <label htmlFor="Name" className="text-[1vw] font-body">Enter your Name</label>
//                                     <input id="name" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="text" name="Name" />
//                                 </div>
//                                 <div className="flex flex-col mb-10">
//                                     <label id="emailIN" htmlFor="email" className="text-[1vw] font-body">*Enter your Email</label>
//                                     <input id="email" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="email" name="Name" />
//                                 </div>
//                                 <div className="flex flex-col mb-10">
//                                     <label id="phoneIN" htmlFor="phone" className="text-[1vw] font-body">Enter your Phone Number</label>
//                                     <input id="phone" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="number" name="phone" />
//                                 </div>
//                                 <div className="flex flex-col mb-10">
//                                     <label htmlFor="Cname" className="text-[1vw] font-body">Enter your Company Name</label>
//                                     <input id="comname" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="text" name="Cname" />
//                                 </div>
//                                 <div className="flex flex-col mb-10">
//                                     <label htmlFor="des" className="text-[1vw] font-body">Enter your Designation</label>
//                                     <input id="des" className="outline-none mt-5 border-b-[1px] text-[1.1vw] border-[#000000ce]" type="text" name="des" />
//                                 </div>
//                                 <div>
//                                     <button className="mt-16 bg-[#185BD8] rounded-md py-3 text-[1.1vw] text-white font-headingSemiBold px-14" onClick={Submit} type="button">Submit</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
