import React, { Component } from 'react'
import "./Map.css"

export default class Map extends Component {
  render() {
    return (
      <div id='world_map'>
        
        <div id='world2'>
          <div id='World_img'>
            <img src={require("./world_map.png")} />
          </div>
          <div id='IN'>
            <div id='dot'>
            </div>
            <div id='text'>
              INDIA
            </div>
          </div>
          <div id='US'>
            <div id='dot'>
            </div>
            <div id='text'>
              USA
            </div>
          </div>
          <div id='UK'>
            <div id='dot'>
            </div>
            <div id='text'>
            United Kingdom
            </div>
          </div>
          <div id='DB'>
            <div id='dot'>
            </div>
            <div id='text'>
              Dubai
            </div>
          </div>
          <div id='KW'>
            <div id='dot'>
            </div>
            <div id='text'>
              Kuwait
            </div>
          </div>
          <div id='SG'>
            <div id='dot'>
            </div>
            <div id='text'>
              Sigapore
            </div>
          </div>
        </div>
      </div>
    )
  }
}
