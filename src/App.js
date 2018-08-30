import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstructorInfo from './components/InstructorComponent';
import {INSTRUCTORS} from './shared/instructor';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     instructors: INSTRUCTORS.instructors
   };
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Instructors Information</h1>
        </header>
        
        <InstructorInfo instructors ={this.state.instructors} />
      </div>
    );
  }
}

export default App;
