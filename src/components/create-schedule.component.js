import React, {Component} from 'react';
import { Link} from "react-router-dom";
import Modal from "./modal.component";
import "./createSchedule.css";


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
            <div className= "top-div" >
                <div className= "white-div" >
                    
                    <h3 className= "computer-list-label">Computer List</h3>
                    
                    <div className= "div-to-centre-table" >
                        
                        <div className="compList">
                            <table className= "table-cl">
                                
                                <thead className="table-head">
                                 <tr>
                                    <th className="head-id" >ID </th>
                                    <th className="head-os">Operating System </th>
                                    <th className="head-schedule">Schedule </th>
                                 </tr>
                                </thead>  

                                <tbody >
                                 <tr >
                                    <td className="row-content">ID7676</td>
                                    <td className="row-content">linux</td>
                                    <td className="row-content-exp">
                                        <form >
                                            <div className="form-div">
                                                
                                                <div>
                                                    <input style={{margin: '5px'}} 
                                                        type= "submit" 
                                                        value="View" 
                                                        className="btn btn-primary" 
                                                        onClick={(e) => this.setState({ openModal: true}) & e.preventDefault()}
                                                    />
                                                </div>

                                                <div className ="book-button-div">
                                                    <Link to= {{pathname: "/calendar", color_attribute: "turquoise" }}
                                                        className="btn btn-primary">Book
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="row-content">ID7676</td>
                                    <td className="row-content">linux</td>
                                    <td className="row-content2">
                                        <form >
                                            <div className="form-div">
                                                <div>
                                                    <input style={{margin: '5px'}} 
                                                        type= "submit" 
                                                        value="View" 
                                                        className="btn btn-primary" 
                                                    />
                                                </div>
                                                
                                                <div className ="book-button-div">
                                                    <Link to= {{pathname: "/calendar", color_attribute: "brown" }}
                                                        className="btn btn-primary">Book
                                                    </Link>
                                                </div >
                                            
                                            </div>
                                        </form>
                                    </td>
                                </tr>

                                <tr >
                                    <td className="row-content">ID7675</td>
                                    <td className="row-content">linux</td>
                                    
                                    <td className="row-content2">
                                        <form >
                                            <div className="form-div">
                                                <div>
                                                    <input style={{margin: '5px'}} 
                                                            type= "submit" 
                                                            value="View" 
                                                            className="btn btn-primary" 
                                                    />
                                                </div>
                                                
                                                <div className ="book-button-div">
                                                    <Link to={{pathname: "/calendar", color_attribute: "green" }}
                                                        className="btn btn-primary">Book
                                                    </Link>
                                                </div >
                                            </div>
                                        </form>
                                    </td>
                                </tr>

                                <tr >
                                    <td className="row-content">ID7696</td>
                                    <td className="row-content">linux</td>
                                    <td className="row-content2">
                                        <form >
                                            <div className="form-div">
                                                <div>
                                                    <input style={{margin: '5px'}} 
                                                           type= "submit" 
                                                           value="View" 
                                                           className="btn btn-primary" 
                                                    />
                                                </div>
                                            
                                                <div className ="book-button-div">
                                                    <Link to={{pathname: "/calendar", color_attribute: "orange" }}
                                                        className="btn btn-primary">Book
                                                    </Link>
                                                </div >
                                            </div>
                                        </form>
                                    </td>
                                </tr>

                                <tr >
                                    <td className="row-content">ID0676</td>
                                    <td className="row-content">linux</td>
                                    <td className="row-content2">
                                        <form >
                                            <div className="form-div">
                                                <div>
                                                    <input style={{margin: '5px'}} 
                                                            type= "submit" value="View" 
                                                            className="btn btn-primary" 
                                                    />
                                                </div>
                                            
                                                <div className ="book-button-div">
                                                    <Link to={{pathname: "/calendar", color_attribute: "purple" }}
                                                        className="btn btn-primary">Book
                                                    </Link>
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