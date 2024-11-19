import React, { Component } from 'react'
import "./Under_construction.css"
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

export default class Under_construction extends Component {
    render() {
        return (
            <div id='construction_page'>
                <div>
                    <Menu />
                </div>
                <div id='construction_page_1' className='row'>
                    <div className='col'>
                        <img src={require("../images/Main_logo.png")} alt='N?A'/>
                    </div>
                    <div id='Con_text' className='col'>
                        <div>
                            <h2>this Page Under Construction</h2>
                            <div ><p><Link to={"/website/"}>Click here</Link> to Home</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
