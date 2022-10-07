import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor()
  {
    super();
    this.state={
      monsters:[
        {
          name: 'Siddharth'
        },
        {
          name: 'Arjun'
        },
        {
          name: 'Himanshu'
        },
      ]
    };
  }
  render(){
     
      return (
        <div className="App">
          {
            this.state.monsters.map(monster => )
          }
        </div>
      );
    }
  }


export default App;
