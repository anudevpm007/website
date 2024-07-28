import { Card } from "react-bootstrap";
import "./Join_us.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Join_us() {

    const [head, setHead] = useState()
    const [val, setVal] = useState()
    const bt = ()=>{
      console.log(val);
    }
    return (
      <div className="Join_us">
        <div className="container">
          <div className="col">
            <Card className="JU_card">
              <h3 style={{color:"white"}}>Hi {head}</h3>
              <form >
                <div id="JU_form">
                  <input type="text" placeholder="Name" onChange={(event)=>{setHead(event.target.value.toString().split(" ")[0]) 
                    setVal(event.target.value.toString())}} maxLength={30}/>
                  <input type="email" placeholder="E-Mail" />
                  <input type="password" placeholder="Password" />
                  <input type="text" name="" id="" placeholder="Location" />
                  <div>
                    <button type="button" onClick={bt}>Submit</button>
                  </div>
                  <div>
                    <Link style={{padding:20,textDecoration:"none"}}>Already have Acoout</Link>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    );
  }
