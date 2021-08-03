import React, {Component} from 'react';
import { Link} from "react-router-dom";
import Modal from "./modal.component";


export default class CreateSchedule extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          openModal: false
        };
      }
    
    render()
    {
        
        return(
            <div style={{paddingBottom: '50px'}}>
                <div style={{
            
                
                backgroundColor: '#FFFFFF', 
                width: '150vh',
                height: '500px',
                position: 'relative',
                zIndex: '1',
                marginTop: '40px',
                marginLeft: '190px',
                marginBottom: '100px',
                paddingLeft: '50px',
                borderRadius: '10px',
            
            
                            }}>
                <h3 style={{paddingTop: '50px'}}>Computer List</h3>
                    <div style={{paddingTop: '50px'}}>
                        <table style={{bordercollapse: 'collapse'}}>
                            <thead style= {{backgroundColor: '#EEE', padding: '10px'}}>
                                <tr>
                                    <th style={{borderRadius: '5px 0 0 5px', paddingLeft: '50px'}}>ID </th>
                                    <th style={{paddingLeft: '50px'}}>Operating System </th>
                                    <th style={{paddingLeft: '50px'}}>Date </th>
                                    <th style={{borderRadius:'0 5px 5px 0',paddingLeft:'50px'}}>Schedule </th>
                                </tr>
                            </thead>   
                            <tbody>
                                <tr>
                                    <td style={{paddingLeft:'50px'}}>ID7676</td>
                                    <td style={{paddingLeft:'50px'}}>linux</td>
                                    <td style={{paddingLeft:'50px'}}>25/05/21</td>
                                    <td style={{paddingLeft:'50px',align:'center', zIndex: '1'}}>
                                        <form >
                                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <div>
                                            <input style={{margin: '5px'}} type= "submit" value="View" className="btn btn-primary" onClick={(e) => this.setState({ openModal: true}) & e.preventDefault()}/>
                                            </div>
                                            <div style= {{paddingTop: '5px'}}>
                                            <Link to="/calendar" className="btn btn-primary">Book</Link>
                                
                                            
                                            </div>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{paddingLeft:'50px'}}>ID7676</td>
                                    <td style={{paddingLeft:'50px'}}>linux</td>
                                    <td style={{paddingLeft:'50px'}}>25/05/21</td>
                                    <td style={{paddingLeft:'50px',align:'center'}}>
                                        <form >
                                            <input style={{margin: '5px'}} type= "submit" value="View" className="btn btn-primary" />
                                            <Link to="/calendar" className="btn btn-primary">Book</Link>
                                    
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <div style= {{position: 'relative', zIndex:10}}>
                {this.state.openModal && <Modal />}</div>
            </div>
        )
    }
}