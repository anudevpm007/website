import { Card } from "react-bootstrap";
import "./Book.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Join_mobile from "./Join_mobile";
import Menu from "../Menu/Menu";
// import Home_footer from "../Home/Home_footer/Home_footer";

export default function Book() {
  const [name, setName] = useState({})
  const [email, setEmail] = useState({})
  const [phone, setPhone] = useState({})
  const [company, setCompany] = useState({})

  

  const sub = (event) => {
    let datas = [name,email,phone,company]
    console.log(datas);
    event.preventDefault();
    console.log(datas.length)
    // if (data.length !== 0) {
    //   axios.post("http://localhost:8000/", email).then(res => console.log("okay")).catch(err => console.log("error"));

    // }
  }
  return (
    <div id="Join_us_main">
      <Menu />
      <div className="Join_us">

        <div className="container">
          <div className="col">
            <Card className="JU_card">
              <h3 style={{ color: "white" }}>SEND ENQUIRY</h3>
              <form onSubmit={sub} >
                <div id="JU_form">
                  <input type="text" placeholder="Name" onChange={(event) => {
                    setName({ name: event.target.value })

                  }} />
                  <input type="email" placeholder="E Mail" onChange={(event) => {
                    setEmail({ email: event.target.value })

                  }}/>
                  <input type="text" placeholder="Phone Number" onChange={(event) => {
                    setPhone({ phone: event.target.value })

                  }}/>
                  <input type="text" name="" id="" placeholder="company" onChange={(event) => {
                    setCompany({ company: event.target.value })

                  }}/>
                  <div className="row">
                    <div className="col" id="privacy">
                      <input id="IN_privacy" type="checkbox" />
                      i agree to the <span><Link>terms and conditions</Link></span> and <span><Link>privacy policy</Link></span>
                    </div>
                  </div>
                  <div>
                    <button type="button" id="Book_submite">Submit</button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
        <div id="mobile">
          <Join_mobile />
        </div>
      </div>
    </div>
  );
}
