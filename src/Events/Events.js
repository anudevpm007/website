import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import "./Events.css"


export default class Events extends Component {
  render() {
    return (
      <div id='events_page'>
        <div id='events_menu'>
          <Menu />
        </div>
        <div className='container' id='events_box'>
          <div id='event_body'>
            <div className='row'>
              <div className='col-4'>
                
              </div>
              <div className='col-4'>
                45:
              </div>
              <div className='col-4'>
                30:
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
