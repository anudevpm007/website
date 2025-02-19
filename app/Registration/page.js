"use client";
import whiteDom from "../api/GetInTouch/whiteList";
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
    var err = "";

    // error Massage indication field to jsx
    var emailLabel = document.getElementById("emailIN");
    var phoneLabel = document.getElementById("phoneIN");
    var Ptag = document.getElementById("serverInfo");
    var form = document.getElementById("Fform");

    // Data collecting section from input field
    name = document.getElementById("name").value + "";
    email = document.getElementById("email").value + "";
    phone = document.getElementById("phone").value + "";
    comname = document.getElementById("comname").value + "";
    des = document.getElementById("des").value + "";
    var data = [name, email, phone, comname, des];

    if (
      data[0].length === 0 ||
      data[1].length === 0 ||
      data[2].length === 0 ||
      data[3].length === 0 ||
      data[4].length === 0
    ) {
      err =
        "Please ensure all required fields are filled out before submitting the form.";
      Ptag.style.color = "red";
      form.style.color = "red";
    } else {
      Ptag.style.color = "black";
      form.style.color = "black";
      err = "";
      try {
        var status = "";
        axios
          .post("/api/GetInTouch/", data)
          .then((res) => {
            status = res.data;
            err = status.status;
            console.log(err);

            if (status.Alpha === "E") {
              emailLabel.style.color = "red";
              phoneLabel.style.color = "black";
              Ptag.style.color = "red";
            }

            if (status.Alpha === "EP") {
              emailLabel.style.color = "red";
              Ptag.style.color = "red";
              phoneLabel.style.color = "red";
              Ptag.style.color = "red";
            }

            if (status.Alpha === "P") {
              phoneLabel.style.color = "red";
              emailLabel.style.color = "black";
              Ptag.style.color = "red";
            }

            if (status.Alpha === "C") {
              phoneLabel.style.color = "black";
              emailLabel.style.color = "black";
              Ptag.style.color = "green";
            }

            if (status.Alpha === "N") {
              Ptag.style.color = "red";
            }

            seterrmsg(err);
          })
          .catch((uperror) => {
            console.log("hello");
          });
      } catch (error) {}
    }
    seterrmsg(err);
  };

  return (
    <div>
      <Menu />
      <MobileMenu />
      <div className=" flex justify-center w-[95%] py-14 rounded-xl bg-white mt-10">
        <div className="md:w-[85%] w-[90%] flex justify-start">
          <div className="md:w-[55%] sm:md:w-[95%] w-[100%]">
            <div className=" text-[5vw] md:text-[3.5vw] lg:text-[3vw] font-headingSemiBold text-[#185BD8]">
              Let's Partner in Cybersecurity
            </div>
            <p className="mb-9 font-body">
              We believe in collaborative defense. Connect with our team of
              experts to discuss your unique security challenges and find the
              right solutions.
            </p>

            <div className="mt-16">
              <form id="Fform" method="post">
                <div className="flex flex-col mb-8">
                  <label
                    htmlFor="Name"
                    className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[18px] font-body"
                  >
                    Enter your Name
                  </label>
                  <input
                    id="name"
                    className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[18px] border-[#000000ce]"
                    type="text"
                    name="Name"
                  />
                </div>
                <div className="flex flex-col mb-8">
                  <label
                    id="emailIN"
                    htmlFor="email"
                    className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[18px] font-body"
                  >
                    Enter your Email
                  </label>
                  <input
                    id="email"
                    className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[18px] border-[#000000ce]"
                    type="email"
                    name="Name"
                  />
                </div>
                <div className="flex flex-col mb-8">
                  <label
                    id="phoneIN"
                    htmlFor="phone"
                    className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[18px] font-body"
                  >
                    Enter your Phone Number
                  </label>
                  <input
                    id="phone"
                    className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[18px] border-[#000000ce]"
                    type="number"
                    name="phone"
                  />
                </div>
                <div className="flex flex-col mb-8">
                  <label
                    htmlFor="Cname"
                    className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[18px] font-body"
                  >
                    Enter your Company Name
                  </label>
                  <input
                    id="comname"
                    className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[18px] border-[#000000ce]"
                    type="text"
                    name="Cname"
                  />
                </div>
                <div className="flex flex-col mb-8">
                  <label
                    htmlFor="des"
                    className="text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[18px] font-body"
                  >
                    Enter your Designation
                  </label>
                  <input
                    id="des"
                    className="outline-none mt-5 border-b-[1px] text-[4.3vw] md:text-[1.6vw] lg:md:text-[1vw] xl:text-[18px] border-[#000000ce]"
                    type="text"
                    name="des"
                  />
                </div>
                <div>
                  <p id="serverInfo" className="mb-9 font-body">
                    {errmsg}
                  </p>
                  <button
                    className="mt-1 bg-[#185BD8] rounded-md py-3 text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[18px] font-body text-white px-14"
                    onClick={Submit}
                    type="button"
                  >
                    Submit
                  </button>
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
  );
}
