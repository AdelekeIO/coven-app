import React, { Component } from 'react'


 class CityItem extends Component {

    launchModal=(e)=> {
        alert('Modal');
    }
    render() {
        console.log(this.props.city);
        let city =this.props.city;
        
        return (
            
                    <figure className="snip1396 blue hover">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample19.jpg" alt="pr-sample19" />
                    <div className="image">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample19.jpg" alt="pr-sample19" />
                        </div>
                    <figcaption>
                        <h3>{city}</h3>
                        <p>The Journey of a thousand miles starts in a day. </p>
                        <input type="button" className="btn btn-success" onClick={this.launchModal} value="View Details" data-toggle="modal" data-target="#exampleModal"/>
                    </figcaption>
                    
                    {/* <div className="price">
                        <s>$24.00</s>$19.00
                    </div> */}
                    </figure>
                    
        
        )
    }
}


export default CityItem;