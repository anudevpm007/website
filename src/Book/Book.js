import React, { Component } from 'react'
import "./Book.css"

export default class Book extends Component {
  render() {
    return (
      <div id='Book_Now'>
        <div className='container'>
          <div className='row'>
            <div className='col-6' id='Book_box_1'>
              <h3></h3>
              <p>RedTeam Hacker Academy’s career-focused, implementation-based learning programs pave the road to a success-assured career in Ethical Hacking & Cybersecurity. Their curriculum is designed to blend theoretical knowledge with practical, hands-on experience, ensuring students are well-prepared for real-world challenges. The academy offers a range of certifications and courses tailored to different skill levels, from beginners to advanced professionals. Instructors are industry experts, providing insights into the latest trends and threats in cybersecurity. With a strong emphasis on ethical practices and cutting-edge technology, RedTeam Hacker Academy equips its students with the skills needed to protect and defend against cyber threats.</p>
            </div>
            <div className='col' id='Book_box_2'>
              <h2>Book Now</h2>
              <form id='book_form'>
                <input placeholder='Name' id='B_name'/>
                <div className='row' id='F_Sec_1'>
                  <div className='col-6' id='F_Sec_1_1'>
                  <input placeholder='E_Mail' id='B_E_mail'/>
                  </div>
                  <div className='col-6' id='F_Sec_1_2'>
                  <input placeholder='Phone Number' id='B_Phone'/>
                  </div>
                </div>
                <input placeholder='Adrress' id='B_adrress'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
