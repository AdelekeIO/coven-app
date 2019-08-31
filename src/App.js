import React, { Component } from 'react'
import './App.css';
import {observer,inject} from 'mobx-react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import axios from 'axios';
import Cities from './Components/Cities'
import Examples from './Components/Examples'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'




@inject('covenStore')



@observer 
 class App extends Component {
   state={
     states:[]
   };
  
  
    
  
  render() {
    const {covenStore} = this.props; 
    console.log(covenStore);

  
    
    return (
      
        
      <div id="root" style={{minWidth:'100%'}}>

           {/* <Examples/> */}
      <Router>
<Route  path="/dashboard" render={props =>(
    <React.Fragment>
    <div className="App"  style={{width:'100%'}}>
        <Header />
        <div className="row koko col-lg-12 border "style={{height:'auto',width:'100%',display:'flex', marginLeft:'auto',marginRight:'auto',textAlign:'center',paddingLeft: '120pt'}}>
        <Cities style={{marginLeft:'auto',marginRight:'auto',textAlign:'center'}}/>
        </div>
       
    </div>
    </React.Fragment>
    )}/>


       
     
       <Route exact path="/" component={Login}/>
       </Router>
       </div>
    )
  }
}

export default App;
