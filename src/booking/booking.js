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
        <div id='booking'>
            <div>
                <div id='booking_Menu'>
                    <Menu/>
                </div>
            </div>
        </div>
    );
}


export default Booking;