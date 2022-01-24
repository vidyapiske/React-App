import React, { Component } from 'react';
import './App.css';

import Calendar from './Components/Calendar/';
import axios from 'axios'

const api=axios.create({
  baseURL: 'http://localhost:3000/courses/'
})

const style = {
  position: "relative",
  margin: "50px auto"
}



class App extends Component {
  onDayClick = (e, day) => {
    alert(day);



  }
  
  render() {
    return (
      <div className="App">
        <Calendar style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    );
  }
}

export default App;
