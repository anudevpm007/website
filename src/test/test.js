import axios from 'axios'
import React, { useState } from 'react'
// import { useEffect } from 'react'
import valid from './validation';



export default function Test() {
    const [email, setEmail] = useState({})

    const cha = (event) => {
        setEmail({ email: event.target.value })
        console.log(email.email);

    }

    const sub = (event) => {
        console.log(email);
        event.preventDefault();
        let data = (email.email);
        console.log(data.length)
        if (data.length !== 0) {
            axios.post("http://localhost:8000/", email).then(res => console.log(res)).catch(err => console.log("error"));
            valid(email.email, 0);
        }

    }
    return (
        <div onSubmit={sub}>
            <form method='POST'>
                <input placeholder='email' name='email' onChange={cha} />
                <p></p>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
