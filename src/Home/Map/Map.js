import React, { Component } from 'react'
import "./Map.css"

export default class Map extends Component {
  render() {
    return (
      <div id='world_map'>
        <div container='container'>
            <div className='row'>
                <div className='col-9' id='world_map_container'>
                    <img src={require("../../images/world_map.png")} id='world_map_img'/>
                    <div id='pin_india' className='row'>
                        <div className='col' id='PI_dot'></div>
                        <div className='col' id='PI_label'>INDIA</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
