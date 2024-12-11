import React, { Component } from 'react'
import "./Map.css"

export default class Map extends Component {
  render() {
    return (
      <div id='world_map'>

        <div id='world2'>
          <div id='World_img'>
            <img src={require("./world_map3.png")} alt='N?A' loading="lazy"/>
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
          <div id='ETH'>
            <div id='dot'>
            </div>
            <div id='text'>
              Ethiopia
            </div>
          </div>
          <div id='MDE'>
            <div id='dot'>
            </div>
            <div id='text'>
              Middle East
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
