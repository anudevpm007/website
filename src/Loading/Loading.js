import React, { Component } from 'react'
import "./Loading.css"

export default class Loading extends Component {
  render() {
    return (
      <div id='Loading'>
        <div id='Loading_box'>
          <div>
            <h1>ASTRALIVA</h1>
          </div>
          <div id='Loading_dot_box'>
            <div className='col-2 Loading_dot' id='dot_1'></div>
            <div className='col-2 Loading_dot' id='dot_2'></div>
            <div className='col-2 Loading_dot' id='dot_3'></div>
            <div className='col-2 Loading_dot' id='dot_4'></div>
          </div>
        </div>
      </div>
    )
  }
}
