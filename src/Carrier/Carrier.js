import HomeFooter from "../Home/Home_footer/HomeFooter"
import "./Carrier.css"
import React, { useState } from 'react'
import Carrier_DB from "./Carrier_data"
import HomeMenu from "../Home/Home_menu/HomeMenu"



const CarrierList = ({ heading, peragraph, year, loc }) => {
  return (
    <div id="Carrier_box" className="col-lg-4" >
      <div id="Carrier_box_1">
        <div id="Carrier_box_heading">
          {heading}
        </div>
        {peragraph.map((PData, Pindex) => {
          return (
            <div id="Carrier_box_pera" key={Pindex}>
              {PData}
            </div>
          );
        })}
        <div id="Carrier_box_info" className="row">
          <div className="col">
            {year}
          </div>
          <div className="col">
            {loc}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Carrier() {

  const [carrier_Data, setcarrier_Data] = useState(Carrier_DB);

  const CaSearch = () => {
    var outputIndex = [];
    var outputData = [];
    var inValue = document.getElementById("CaSearch").value;
    if (inValue !== "") {
      inValue = inValue.split(" ");
      Carrier_DB.map((Ca_DB, Ca_index) => {
        var i = 0;
        var Ca_heading_DB = (Ca_DB.heading).split(" ")
        inValue.map((inValue_split, inValue_index) => {
          Ca_heading_DB.map((Ca_Split_DB, Ca_Split_index) => {
            Ca_Split_DB = (Ca_Split_DB).toLowerCase()
            inValue_split = inValue_split.toLowerCase()
            if (Ca_Split_DB === inValue_split && i === 0) {
              outputIndex.push(Ca_index)
              i = 1
            }
            return (0);
          })

          return (0);
        })
        return (0);
      })

      outputIndex.map((out_DB_index, out_index) => {
        outputData.push(Carrier_DB[out_DB_index]);
        return (0);
      })
      setcarrier_Data(outputData);
    } else {
      setcarrier_Data(Carrier_DB)
    }
  }

  return (
    <div>

      <div id="Carrier">
        <div id="Carrier_header">
          <div id="Carrier_Menu">
            <HomeMenu colorOut={"black"}/>
          </div>
          <div id="Carrier_head_img">
            <img src={require("./image/Carrier_header.jpg")} alt="N?A" />
            <div id="Ca_img_shape">
            </div>
          </div>
          <div id="Ca_header_text">
            <div id="Ca_text">
              <div id="Ca_text-1">
                <span>27</span> roles in <span>3</span> locations
                <div id="Ca_textb-1">
                  Come work with us
                </div>
                <div id="Ca_textb-2">
                  Join our team in Dubai to help reshape the UI/UX Design landscape and make products that reach over 20 million users worldwide.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="carrier_body">
          <div id="Carrier_Main_point" className="row">
            <div className="col-3">
              <div id="Ca_MP_container">
                <div id="Ca_MP_box">
                  <div id="Ca_MP_head">VISION</div>
                  <div id="Ca_MP_Pera">
                    To help businesses grow by
                    building world-class cybersecurity
                    solutions through a constant focus
                    on innovation.
                  </div>
                </div>

              </div>
            </div>
            <div className="col-3">
              <div id="Ca_MP_container">
                <div id="Ca_MP_box">
                  <div id="Ca_MP_head">MISION</div>
                  <div id="Ca_MP_Pera">

                    To be the most trusted cybersecurity
                    company in every line of business
                    and target market
                    that we operate
                  </div>
                </div>

              </div>
            </div>
            <div className="col-3">
              <div id="Ca_MP_container">
                <div id="Ca_MP_box">
                  <div id="Ca_MP_head">PURPOSE</div>
                  <div id="Ca_MP_Pera">
                    To build a digitally secure
                    society so that humanity can
                    grow and prosper.
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="Middle_heading">
            <div id="Middle_heading_B">
              Astraliva
            </div>
          </div>
          <div id="Middle_Pera">
            <div id="Middle_Pera_1">
              Astraliva is the trusted cybersecurity partner for organizations worldwide. From public defense sectors to Fortune 100 companies, our clients appreciate our adaptive strategies, commitment to results, and research based meticulous approach. We offer a comprehensive range of services, emphasizing next-level education and robust mobile security solutions.
              <div id="Middle_Pera_2">
                Recognized as a BlackHat Training partner, our programs have benefited over 3,000 individuals.
              </div>
            </div>
          </div>
          <div id="carrier_Why">
            <div id="carrier_Why_con">
              <div id="carrier_Why_row" className="row">
                <div id="carrier_Why_img" className="col-6">
                  <img src={require("./image/why_img_1.jpg")} alt="N?A" />
                </div>
                <div id="carrier_Why_explain" className="col-6">
                  <div id="carrier_Why_head">
                    Industry Experience
                  </div>
                  <div id="carrier_Why_pera">
                    With years of experience in working with businesses of all sizes and industries, we are committed to providing quality IT services. Our expertise ranges across all areas of IT, including data analytics, data backup and recovery, IT security, website maintenance and much more.
                  </div>
                </div>
              </div>
              <div id="carrier_Why_row" className="row">
                <div id="carrier_Why_explain" className="col-6">
                  <div id="carrier_Why_head">
                    Industry Experience
                  </div>
                  <div id="carrier_Why_pera">
                    With years of experience in working with businesses of all sizes and industries, we are committed to providing quality IT services. Our expertise ranges across all areas of IT, including data analytics, data backup and recovery, IT security, website maintenance and much more.
                  </div>
                </div>
                <div id="carrier_Why_img" className="col-6">
                  <img src={require("./image/why_img_2.jpg")} alt="N?A" />
                </div>
              </div>
            </div>
          </div>
          <div id="unique">
            <div>
              <div id="unique_head">
                A company as unique as you
              </div>
              <div id="unique_container" className="row">
                <div className="col-3">
                  <div className="unique_container_head">
                    No Hierarchy
                  </div>
                  <div className="unique_container_pera">
                    We believe in action rather than position. So we’ve eliminated the entire hierarchical structure to make room for individuals to own up to projects and drive them with full responsibility
                  </div>
                </div>
                <div className="col-3">
                  <div className="unique_container_head">
                    No "Leave Policy"
                  </div>
                  <div className="unique_container_pera">
                    It is extremely important to give yourself a break for as long as you need. Keeping this in mind, we’ve gotten rid of the archaic “leave policy”.
                  </div>
                </div>
                <div className="col-3">
                  <div className="unique_container_head">
                    Health and Wellness
                  </div>
                  <div className="unique_container_pera">
                    Being part of a health and wellness company, we do care for you. A part of it means we give food allowance for all our employees and extension privileges on purchasing a Cult pack.
                  </div>
                </div>
              </div>
              <div id="unique_container" className="row">
                <div className="col-3">
                  <div className="unique_container_head">
                    Flexible Working Hours
                  </div>
                  <div className="unique_container_pera">
                    Few hours of productive work is better than a day wasted. Work in a place and time that you are most productive.
                  </div>
                </div>
                <div className="col-3">
                  <div className="unique_container_head">
                    Pick your Projects
                  </div>
                  <div className="unique_container_pera">
                    We are always up to something healthy and interesting. If a project appeals to you, and you want to be a part of it, we always welcome a fresh pair of hands.
                  </div>
                </div>
                <div className="col-3">
                  <div className="unique_container_head">
                    Work Life Balance
                  </div>
                  <div className="unique_container_pera">
                    Maintaining work-life balance is not just a cliche for us, we truly believe in it. And what better way to find this balance than being able to be around your loved ones as and when you need?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="future">
            <div id="future_head">
              Create the future with us
            </div>
            <div id="future_pera">
              <p>
                Realize your potential and empower others to realize theirs as part of a company that’s innovating solutions to
                global challenges that affect billions of lives
              </p>
            </div>
          </div>
          <div id="Carrier_list_gradient">
            <div id="Carrier_list_search_con">
              <div id="Carrier_list_search" className="row">
                <div id="Carrier_list_search_in" className="col-8">
                  <input type="text" placeholder="Search here ...." id="CaSearch" />
                </div>
                <div id="Carrier_list_search_btn" className="col-3">
                  <input type="button" value="search" onClick={CaSearch} />
                </div>
              </div>
            </div>
            <div id="Carrier_list_con">
              <div className="row">
                {
                  (carrier_Data).map((Data, index) => {
                    return (
                      <CarrierList heading={Data.heading} peragraph={Data.pera} loc={Data.loc} year={Data.year} key={index} />
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div id="JOIN">
            <div id="join_head">
              JOIN OUR<br />TALENT COMMMUNITY
            </div>
            <div id="join_part">
              <div id="join_part_con" className="row">
                <div className="col" id="join_button">
                  <div>
                    <a href="https://web.whatsapp.com/">
                      JOIN NOW
                      <img src={require("./image/whatsapp.png")} alt="N?A" />
                    </a>
                  </div>
                </div>
                <div className="col" id="join_part_pera">

                  Whatever your interest, from hiking and reading to networking and skill sharing,
                  there are thousands of people who share it on Meetup.
                  Events are happening every day—sign up to join the fun.

                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <HomeFooter BackColor={"rgb(15, 15, 15)"}/>
        </div>
      </div>
    </div>
  )
}

