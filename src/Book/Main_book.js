import React, { Component } from 'react'
import "./Main_book.css"
import Book from './Book'
import Home_footer from '../Home/Home_footer/Home_footer'

export default class Main_book extends Component {
  render() {
    return (
      <div id='Main_book_Now'>
        <div>
            <Book/>
        </div>
        <div>
            <Home_footer/>
        </div>
      </div>
    )
  }
}
