import React, { Component } from 'react'
import "./Events.css";
import Home_footer from '../Home/Home_footer/Home_footer';
import Events_DB from './Events_data';

const EventsContainer = ({heading,pera,publish,date,time,img}) => {
  return (
    <div id='Event_box_border'>
      <div id='Event_box' className='row'>
        <div className="col-6" id='Event_box_detials'>
          <div id='Event_box_detials_in'>
            <div id='Event_box_heading'>
              {heading}
            </div>
            <div id='Event_box_pera'>
              {pera}
            </div>
            <div id='Event_box_info_con'>
              <div id='Event_box_info' className='row'>
                <div className="col-3">
                  {publish}
                </div>
                <div className="col-3">
                  {date}
                </div>
                <div className="col-3">
                  {time}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6" id='Event_box_img'>
          <img src={img} alt="" />
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
            {
              Events_DB.map((EData,Eindex)=>{
                return(
                  <div>
                    <EventsContainer heading={EData.heading} pera={EData.pera} publish={EData.pub} date={EData.date} time={EData.time} img={EData.img}/>
                  </div>
                );
              })
            }
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
