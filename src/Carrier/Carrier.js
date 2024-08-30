import React, { Component, useState } from 'react'
import "./Carrier.css"
import Carrier_data from './Data/Data_Carrier'
import { Link } from 'react-router-dom';



export default function Carrier() {
    const [val, setVal] = useState("0");
    const [inval, setInval] = useState("");

    const search = () => {
        const invalue = document.getElementById("getSearch").value;
        setInval(invalue);
    }

    const location = () => {
        const value = document.getElementById("drop_down_carrier").value;
        setVal(value);
        setInval(0);
    }



    const Searching = (data) => {
        let i = 0;
        let j = (i + inval.length);

        console.log(data);
        let k = 1;
        let len = (data.heading).length;
        while (k === 1) {

            if (j <= len) {
                let part = (data.heading).slice(i, j);
                i = i + 1
                j = j + 1
                console.log(part);

                if ((inval.toLocaleLowerCase()) === (part.toLocaleLowerCase())) {
                    console.log("dsfkldskfjnmklsdjmfklsjdflkjsldkfjlskdjf");

                    return true;
                }

            } else {
                k = 0;
            }

        }
    }
    return (
        <div id='Carrier'>
            <div id='Carrier_body'>
                <div id='Carrier_head'>
                    <h3>Our job Carrier</h3>
                </div>
                <div id='Carrier_mid'>
                    <div id='Carrier_search' className='row'>
                        <div className='col-9' id='Carrier_search_input'>
                            <input id='getSearch' placeholder='Search' />
                        </div>
                        <div className='col' id='Carrier_search_button'>
                            <button onClick={search}>Search</button>
                        </div>
                        <div className='col' id='Carrier_search_menu'>
                            <select id='drop_down_carrier' onChange={location}>
                                <option value={"0"}>location</option>
                                <option value={"Bangalure"}>Bangalure</option>
                                <option value={"Kozhikode"}>Kozhikode</option>
                                <option value={"Mysuru"}>Mysuru</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div id='Carrier_list'>
                    <div id='Carrier_list_1'>
                        {
                            Carrier_data.map((data) => {
                                if (val === "0") {
                                    if (inval.length !== 0 || inval === 0) {

                                        if (Searching(data)) {
                                            return (
                                                <Link>
                                                    <div id='Carrier_list_box' >
                                                        <h3>{data.heading}</h3>
                                                        <div className='row'>
                                                            <div className='col'><p>Location:{data.loc}</p></div>
                                                            <div className='col'>{data.exp} </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        }
                                    } else {
                                        return (
                                            <Link>
                                                <div id='Carrier_list_box' >
                                                    <h3>{data.heading}</h3>
                                                    <div className='row'>
                                                        <div className='col'><p>Location:{data.loc}</p> </div>
                                                        <div className='col'>{data.exp} </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    }
                                } else if (inval.length === 0) {
                                    return (
                                        <Link>
                                            <div id='Carrier_list_box' >
                                                <h3>{data.heading}</h3>
                                                <div className='row'>
                                                    <div className='col'><p>Location:{data.loc}</p> </div>
                                                    <div className='col'>{data.exp} </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                }
                                else {
                                    if (val === data.loc) {
                                        return (
                                            <Link>
                                            <div id='Carrier_list_box' >
                                                <h3>{data.heading}</h3>
                                                <div className='row'>
                                                    <div className='col'><p>Location:{data.loc}</p> </div>
                                                    <div className='col'>{data.exp} </div>
                                                </div>
                                            </div>
                                        </Link>
                                        );
                                    } 
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
