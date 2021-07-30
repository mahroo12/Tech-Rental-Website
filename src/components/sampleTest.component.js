import React, {Component} from 'react';


export default class SampleTest extends Component {
   render(){
        return(
        <div>
            <div className= "modalContainer">
                <h1>hi {this.props.location.params} and {this.props.location.param2} ?</h1>
            </div>
        </div>
    )}
}
