import React, {Component} from 'react';

import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

export default class CreateStudent extends Component {
  
    constructor(props) {
    super(props);

    this.onChangeStudentname = this.onChangeStudentname.bind(this);
    this.onChangeStudentid = this.onChangeStudentid.bind(this);
    this.onChangeStudentemail = this.onChangeStudentemail.bind(this);
    this.onChangemajor = this.onChangemajor.bind(this);
    this.onChangeStartdate = this.onChangeStartdate.bind(this);
    this.onChangeEnddate = this.onChangeEnddate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      studentid: '',
      studentemail: '',
      major: '',
      start: null,
      end: null,
      arr: [],
      


    }
  }

  /*
  componentDidMount() {
   // axios.get('http://localhost:5000/students/')
    //  .then(response =>  this.setState({...this.state, arr: response.data}));

      //const obj = {'title' : 'hello', 'major' : 'smth'};
      //const obj2 = {'title' : 'hi', 'major' : 'another'};
      //this.state.arr.push(obj);
      //console.log(this.state.arr);
      //this.state.arr.push(obj2);
      //console.log(this.state.arr);
      
     // this.setState({
       // arr: this.state.arr.concat({'title' : 'a', 'major' : 'm'})
      //});

     // console.log(this.state.arr);

     axios.get('http://localhost:5000/students/')
       .then(response =>  response.data.map((obj) => this.state.arr.push({'title' : obj.studentname, 'major': obj.major})));
       console.log(this.state.arr);
    }*/

  onChangeStudentname(e) {
    this.setState({
      title: e.target.value
    });
  }
  
  onChangeStudentid(e) {
    this.setState({
        studentid: e.target.value
    });
  }
  
  onChangeStudentemail(e) {
    this.setState({
        studentemail: e.target.value
    });
    }

   
    onChangemajor(e) {
        this.setState({
            major: e.target.value
            });
    }
    
    onChangeStartdate(date) {
        this.setState({
            start: date
                });
     } 
    
    onChangeEnddate(date) {
        this.setState({
            end: date
                });
     }            


  onSubmit(e) {
    e.preventDefault();
  

    const student = {
      title: this.state.title,
      studentid: this.state.studentid,
      studentemail: this.state.studentemail,
      major: this.state.major,
      start: this.props.location.params,//this.state.startdate,
      end: this.props.location.param2//this.state.enddate
    }


    console.log(student);
    


    axios.post('http://localhost:5000/students/add', student)
      .then(res => console.log(res.data));
    
      

      //console.log("the arr is:");
      //console.log(this.state.arr);
              
   

      

              //window.location = '/';

  }

  render() {
    return (
        
      <div >
        <h3 style= {{color:'#545B9E', fontSize:20, paddingLeft: '32px'}}>Student Information form</h3>
        <hr style={{color: '#9062DC50',height: 1}}/>
        
        <div className="main-pink-block" style={{display: 'flex', justifyContent: 'space-between'}}>
          
          <div className="form-block" style={{marginLeft: '30px',marginBottom: '30px', backgroundColor:'#FAFAFF', height:'500px', width:'550px', borderRadius: '5px'}}>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                
                <label style={{paddingLeft: '30px', color:'#00000060'}}>Full Name: </label>
                <input   style={{ marginLeft: '30px' , marginTop: '10px', marginBottom: '10px', width: '200px'}} type="text"
                  required
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeStudentname}
                  />
              </div>
              
              <div className="form-group"> 
              
                <label style={{paddingLeft: '30px', color:'#00000060'}}>Student ID: </label>
                <input   style={{ marginLeft: '30px' , marginTop: '10px', marginBottom: '10px', width: '200px'}} type="text"
                  required
                  className="form-control"
                  value={this.state.studentid}
                  onChange={this.onChangeStudentid}
                  />
              </div>

              <div className="form-group"> 
                <label style={{paddingLeft: '30px', color:'#00000060'}}>Email: </label>
                <input   style={{ marginLeft: '30px' , marginTop: '10px', marginBottom: '10px', width: '200px'}} type="text"
                  required
                  className="form-control"
                  value={this.state.studentemail}
                  onChange={this.onChangeStudentemail}
                  />
              </div>

              <div className="form-group"> 
               <label style={{paddingLeft: '30px', color:'#00000060'}}>Major: </label>
                <input style={{ marginLeft: '30px' , marginTop: '10px', marginBottom: '10px', width: '200px'}} type="text"
                  
                  className="form-control"
                  value={this.state.major}
                  onChange={this.onChangemajor}
                  />
              </div>
              <div className="form-group"> 
                <label style={{paddingLeft: '30px', color:'#00000060'}}>Start Date: </label>
                <div style={{paddingLeft: '30px', marginTop: '10px', marginBottom: '10px'}}>
                <input value={this.props.location.params}/>
                </div>
              </div>

              <div className="form-group"> 
                <label style={{paddingLeft: '30px', color:'#00000060'}}>End Date: </label>
                <div style={{paddingLeft: '30px', marginTop: '10px', marginBottom: '10px'}}>
                <input value={this.props.location.param2}/>
                  
                </div>
              </div>
            
              <div className="form-group">
              <input style={{ marginTop: '160px', marginLeft: '30px', backgroundColor: '#545B9E'}} type="submit" value="Submit" className="btn btn-primary" />
          </div>

            </form>
          </div>

          <div>
          <div className="another-div" style={{backgroundColor:'#FAFAFF', height:'300px', width:'450px', marginRight: '30px', borderRadius: '5px'}}>
          </div>
          
          </div>
        </div>
      </div>
    )
  }
}


