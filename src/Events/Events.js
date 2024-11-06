import React, { Component } from 'react'
import "./Events.css";
import Home_footer from '../Home/Home_footer/Home_footer';

const EventsContainer = () => {
  return (
    <div id='Event_box_border'>
      <div id='Event_box' className='row'>
        <div className="col-6" id='Event_box_detials'>
          <div id='Event_box_detials_in'>
            <div id='Event_box_heading'>
              Advanced Frida Usage Part 10 – Instruction
              Tracing using Frida Stalker
            </div>
            <div id='Event_box_pera'>
              Welcome to another blog in the series of Advance
              Frida Usage. This blog post takes a unique and
              intriguing approach by demonstrating how to
              use Frida’s Stalker APIs to trace instructionsas
              they execute within anapp in real time. Additionally,
              we’ll explore how to use various attributes of these
              instructions to extract valuable insights.
            </div>
            <div id='Event_box_info_con'>
              <div id='Event_box_info' className='row'>
                <div className="col-3">
                  Astraliva
                </div>
                <div className="col-3">
                  September 17, 2024
                </div>
                <div className="col-3">
                  11:00 am
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6" id='Event_box_img'>
          <img src={require("./dynamic_image/Event_image_1.jpeg")} alt="" />
        </div>
      </div>
    </div>
  );
}




export default class Events extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            Menu
          </div>
          <div id='Events_heading' className='row'>

            <div id='Events_heading-1' className="col-6">
              <div id='sub_Events_heading_1'>
                <div id='sub_Events_heading_1_1'>
                  Hacker's Journal
                </div>
                <div id='sub_Events_heading_1_2'>
                  Astraliva
                </div>
                <div id='sub_Events_heading_1_3'>
                  Discover Tarlogic's latest Cybersecurity and cyberintelligence researchs
                </div>
              </div>
              <div className='row' id='sub_Events_heading_2'>
                We actively contribute to and participate in the cybersecurity community. Come see us at an upcoming
                industry event or tune into one of our speaking gigs, past or present!
              </div>
            </div>
            <div id='Events_heading_2' className="col-6">
              <div id='Game_div'>
                GAME<br />OVER
              </div>
            </div>
          </div>
          <div id='Events_search_con'>
            <div id='Events_Search' className='row'>
              <div className='col' id='Event_search_in'>
                <input type="text" placeholder='search here ....' />
              </div>
              <div className="col-4" id='Event_search_btn'>
                <input type="button" value="Search" />
              </div>
            </div>
          </div>
          <div id='Events_under_search_pera'>
            <p>
              We actively contribute to and participate in the cybersecurity community. Come see us at an upcoming industry event or tune into one of our speaking gigs, past or present!
            </p>
          </div>
          <div id='Event_list'>
            <EventsContainer />
            <EventsContainer />
            <EventsContainer />
            <EventsContainer />
            <EventsContainer />
            <EventsContainer />
          </div>
          <div id='Events_subscribe_container'>
            <div id='Events_subscribe'>
              <div>
                <div id='Events_subscribe_pera'>
                  Subscribe to Astraliva Security Blog<br />
                  Be first to learn about latest tools, advisories, and findings.
                </div>
                <div>
                  <div id='Events_in_subscribe' className='row'>
                    <div className='col' id='Event_subscribe_in'>
                      <input type="text" placeholder='Email Address ....' />
                    </div>
                    <div className="col-4" id='Event_subscribe_btn'>
                      <input type="button" value="Subscribe" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          <Home_footer />
          </div>
        </div>
      </div>
    )
  }
}
