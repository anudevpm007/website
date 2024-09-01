import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import Home_footer from '../Home/Home_footer/Home_footer'
import "./booking.css"
import axios from 'axios';

function Booking() {
    const [erro, setErro] = useState();
    var Errors = "";
    
    const sub = (event) => {
        // console.log(email);
        
        event.preventDefault();
        let name = document.getElementById('Book_name').value;
        let email = document.getElementById('Book_email').value;
        let phone = document.getElementById('Book_phonenumber').value;
        let company = document.getElementById('Book_company').value;
        let data = { name: name, email: email, phone: phone, company: company };
        console.log('hello');
        if (name.length !== 0 && email.length !== 0 && phone.length !== 0 && company.length !== 0) {
            console.log(data.length)
            Errors = "";
            setErro(Errors);
            if (data.length !== 0) {
                console.log('hello');
                document.getElementById("errortext").value = "";
                axios.post("http://localhost:8000/book", data).then(res => console.log("Status Code :" + res.status)).catch(err => console.log("error"));

            } 
        }else {
            Errors = "Fill the all the field";
            console.log(Errors);
            setErro(Errors);
            
            // document.getElementById("errortext").value = "Fill the all the field";
            // return;
        }
    }

    return (
        

        <div id='booking' className='container-fluid'>
            <div id='booking_main' className='col'>
                <div className='row' id='Book_menu'>
                    <Menu />
                </div>
                <div className='row' id='Book_form'>
                    <div className='row' id='Book_form_1'>
                        <div className='col' id='Book_form_box'>
                            <form id='Book_form_tag' method='POST' >
                                <h1 style={{ color: "white" }}>Book your slot</h1>
                                <div className='col'>
                                    <input type="text" id="Book_name" placeholder="Name" className='field' />
                                </div>
                                <div className='col'>
                                    <input type="email" id="Book_email" placeholder="E Mail" className='field' />
                                </div>
                                <div className='col'>
                                    <input type="text" id="Book_phonenumber" placeholder="Phone Number" className='field' />
                                </div>
                                <div className='col'>
                                    <input type="text" id="Book_company" placeholder="company" className='field' />
                                </div>
                                <div className="col" id="privacy">
                                    <input id="IN_privacy" type="checkbox" />

                                    <p>i agree to the <a href=''>terms and conditions</a> and <a href=''>privacy policy</a></p>



                                </div>
                                <p style={{ color: 'red' ,fontSize: '8px'}} id='errortext'>{erro}</p>
                                <div className='col'>
                                    <button onClick={sub} type="button" id="Book_submite">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row' id='Book_footer'>
                    <Home_footer />
                </div>

            </div>
        </div>
    )
}


export default Booking;