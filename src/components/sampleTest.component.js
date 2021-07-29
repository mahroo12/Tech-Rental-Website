import React, {Component} from 'react';


export default class SampleTest extends Component {
   render(){
        return(
        <div>
            <div className= "modalContainer">
                <h1>hi {this.props.location.params} ?</h1>
            </div>
        </div>
    )}
}
