import React, { Component } from 'react'
import "./Main_Register.css"
import Register from './Register'
import Home_footer from '../../Home/Home_footer/Home_footer'

export default class Main_book_Register extends Component {
  render() {
    return (
      <div id='Main_book_Now'>
        <div>
            <Register/>
        </div>
        <div id='down'>
            <Home_footer/>
        </div>
      </div>
    )
  }
}
