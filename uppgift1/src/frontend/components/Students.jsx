import React, { Component, Fragment } from 'react';
import styles from '../components/Students.module.css';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      name: '',
      email: '',
      address: {
        city: '',
        street: '',
        zipcode: '',
      }
    }
  }

  componentDidMount = () => {
    this.getStudents();
  };

  getStudents = () => {
    fetch('http://localhost:2000/students')
    .then((res) => res.json())
    .then((response) => {
      this.setState({
        students: response,
      });
    })
  }

  refreshTable = (id) => {
    let students = this.state.students;
    let newStudents = students.filter(student => student._id !== id)
    this.setState({
      students: newStudents
    })
  }

  deleteStudent = (id) => {
    fetch('http://localhost:2000/students/' + id, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
    }).then(() => {
      this.refreshTable(id);
    })
  }

  createStudent = (e) => {
    console.log('created student')
  }

  render() {
    const { students } = this.state;
    return (
      <Fragment>
        <h2 className={styles.studentsH2}>Students</h2>
        <div className={styles.container}>
          <table className={styles.students}>
            <thead>
              <tr>
                <th className={styles.tHeader}>Name</th>
                <th className={styles.tHeader}>Email</th>
                <th className={styles.tHeader}>Address</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) =>
                <tr key={i}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.address.street + ', ' + student.address.city}</td>
                  <td><button type="button" className="btn btn-dark" onClick={() => this.deleteStudent(student._id)}>delete</button></td>
                </tr>
              )}
            </tbody>
          </table>
       </div>
      </Fragment>
    )
  }
} 

export default Students;