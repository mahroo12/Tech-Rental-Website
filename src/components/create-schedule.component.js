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
                width: '140vh',
                height: '470px',
                position: 'relative',
                zIndex: '1',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '40px',
                marginLeft: '220px',
                marginBottom: '100px',
                paddingLeft: '15px',
                borderRadius: '10px',
            
            
                            }}>
                    <h3 style={{paddingTop: '50px', paddingLeft:'5px', textAlign: 'center'}}>Computer List</h3>
                    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '30px'}}>
                    <div className="compList">
                        <table style={{bordercollapse: 'collapse'}}>
                            <thead style= {{backgroundColor: '#EEE', padding: '10px'}}>
                                <tr>
                                    <th style={{borderRadius: '5px 0 0 5px', paddingLeft: '50px', textAlign: 'center'}}>ID </th>
                                    <th style={{paddingLeft: '50px', textAlign: 'center'}}>Operating System </th>
                                    
                                    <th style={{borderRadius:'0 5px 5px 0',paddingLeft:'50px', width: '300px', textAlign: 'center'}}>Schedule </th>
                                </tr>
                            </thead>   
                            <tbody >
                                <tr >
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>ID7676</td>
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>linux</td>
                                    
                                    <td style={{paddingLeft:'50px',align:'center', zIndex: '1'}}>
                                        <form >
                                            <div style={{display: 'flex', justifyContent: 'center'}}>
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
                                <tr>
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>ID7676</td>
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>linux</td>
                                    
                                    <td style={{paddingLeft:'50px',align:'center'}}>
                                        <form >
                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <div>
                                            <input style={{margin: '5px'}} type= "submit" value="View" className="btn btn-primary" />
                                            </div>
                                            <div style= {{paddingTop: '5px'}}>
                                            <Link to="/calendar" className="btn btn-primary">Book</Link>
                                            </div >
                                            </div>
                                        </form>
                                    </td>
                                </tr>

                                <tr >
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>ID7675</td>
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>linux</td>
                                    
                                    <td style={{paddingLeft:'50px',align:'center'}}>
                                    <form >
                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <div>
                                            <input style={{margin: '5px'}} type= "submit" value="View" className="btn btn-primary" />
                                            </div>
                                            <div style= {{paddingTop: '5px'}}>
                                            <Link to="/calendar" className="btn btn-primary">Book</Link>
                                            </div >
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>ID7696</td>
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>linux</td>
                                    
                                    <td style={{paddingLeft:'50px',align:'center'}}>
                                    <form >
                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <div>
                                            <input style={{margin: '5px'}} type= "submit" value="View" className="btn btn-primary" />
                                            </div>
                                            <div style= {{paddingTop: '5px'}}>
                                            <Link to="/calendar" className="btn btn-primary">Book</Link>
                                            </div >
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>ID0676</td>
                                    <td style={{paddingLeft:'50px', textAlign: 'center'}}>linux</td>
                                    
                                    <td style={{paddingLeft:'50px',align:'center'}}>
                                        <form >
                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <div>
                                            <input style={{margin: '5px'}} type= "submit" value="View" className="btn btn-primary" />
                                            </div>
                                            <div style= {{paddingTop: '5px'}}>
                                            <Link to="/calendar" className="btn btn-primary">Book</Link>
                                            </div >
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                    
                </div>
                
                {this.state.openModal && <Modal />}
            </div>
        )
    }
}