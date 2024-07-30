import React, { Component } from 'react'
import { CardImg, CardTitle,CardText } from 'react-bootstrap'
import "./Menu_Services.css"


export default class Menu_Services extends Component {
  render() {
    return (
      <div id='Menu_services'>
        <div className='container'>
            <div className='row'>
                <div  id='Menu_S_box'>
                    <div className='col' id='Section_1'>
                        <div>
                            <CardTitle id='Section_1_1' >Support VirtualBox RDP, disk encryption, NVMe and PXE boot for Intel cards. </CardTitle>
                            <CardText id='Section_1_2' >The VirtualBox User Manual is included in the VirtualBox packages above. If, however, you would like to take a look at it without having to install the whole thing,</CardText>
                        </div>
                    </div>
                    <div  id='Section_2'>
                        <CardImg alt='N?A' src={require("../Data/images/iot.png")} id='Section_2_1'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
