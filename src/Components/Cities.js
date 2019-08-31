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
        // console.log();
        
        axios.get('https://opensky-network.org/api/states/all')
        .then(res =>{
          // console.log(res.data);
          let {states} = res.data; 
                  var data = [];
        var length = 10; // user defined length
          var k=0;
        for(var i = 0; i < length; i++) {
            // console.log(i);

            console.log(states[i][2]);
            // if(data[1].includes(states[i][2])){
            //   console.log('included');
              
            // }
            // console.log(data);
            
            data.push({index:states[i][0],city:states[i][2]});
            // console.log(data[i].city);
            
            // if (Object.values(data[i]).indexOf(states[i][2]) > -1) {
            //   console.log('included');
            //   data.pop();
            //   // i-=1;
            // }

        }
          // console.log(data);
          
          this.setState({cities:[...data]});
         
          
         
        })
        .catch(err=>{
          console.log(err);
          
        });
      }

      logCities(){
          console.log(this.state.cities);
          
      }
    render() {
      
        return (this.state.cities.map((city) => 
        <React.Fragment>
           

        <CityItem key={city.index} city={city.city}/>

        
        </React.Fragment>
        )
      
                    
            
        )
    }
}

export default Cities;