import React, { Component } from 'react'
import CityItem from './CityItem'
// import { observer } from 'mobx-react-lite';
import {observer,inject} from 'mobx-react'
import axios from 'axios'

@inject('covenStore')
@observer
 class Cities extends Component {
     state={
cities:[]
     }

    componentDidMount(){
        
        axios.get('https://opensky-network.org/api/states/all')
        .then(res =>{
          // console.log(res.data);
          let {states} = res.data; 
                  var data = [];
        var length = states.length; // user defined length
          var k=0;
          console.log(states);
          
        for(var i = 0; i < length; i++) {

            console.log(states[i][2]);
            
            data.push({key:states[i][0],city:states[i][2]});
            
        }
          console.log(data);
          
          
          // this.setAll(data);
          this.setUnique(data);
          
         
        })
        .catch(err=>{
          console.log(err);
          
        });
      }

      logCities(){
          console.log(this.state.cities);
          
      }
      setAll(data){
        this.setState({cities:[...data]});
      }
      setUnique(data){
        let arr = new Array();
        arr=[...new Set(data.map(city=>city.city))];
          
         this.setState({cities:[...(arr.slice(0, 10))]});
      }
    render() {
      
        return (this.state.cities.map((city, index) => 
        <React.Fragment>
        
        <CityItem key={index} city={city}/>

        
        </React.Fragment>
        )
      
                    
            
        )
    }
}

export default Cities;