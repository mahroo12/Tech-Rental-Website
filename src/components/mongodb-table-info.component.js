import React, { Component } from 'react';
import axios from 'axios';

const StudentInfo = props => (
  <tr>
    <td>{props.student_info.title}</td>
    <td>{props.student_info.name}</td>
    <td>{props.student_info.studentid}</td>
    <td>{props.student_info.studentemail}</td>
    <td>{props.student_info.start.substring(0,10)}</td>
    <td>{props.student_info.end.substring(0,10)}</td>
    
  </tr>
)

export default class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        students_to_be_entered_in_table: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/students/')
      .then(response => {
        this.setState({ students_to_be_entered_in_table: response.data })})
      .catch((error) => {
        console.log(error);
      })
  }


  studentList() {
    return this.state.students_to_be_entered_in_table.map(currentstudent => {
      return <StudentInfo student_info={currentstudent} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Name</th>
              <th>Student ID</th>
              <th>Student Email</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            { this.studentList() }
          </tbody>
        </table>

      </div>
    )
  }
}