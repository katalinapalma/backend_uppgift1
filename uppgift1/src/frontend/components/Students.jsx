import React, { Component, Fragment } from 'react';
import styles from '../components/Students.module.css';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {name: 'Django', id: 1, age: 20},
        {name: 'Dr. King', id: 2, age: 60},
        {name: 'Calvin Candie', id: 3, age: 30},
        {name: 'Broomhilda', id: 4, age: 31},
      ],
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:2000/students')
    .then((res) => res.json())
    .then((response) => {
      console.log('response', response)
      this.setState({
        students: response
      });
    })
  };

  deleteStudent = (e) => {
    console.log('deleted student')
  }

  createStudent = (e) => {
    console.log('created student')
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age} = student //destructuring
       return (
          <tr key={id}>
             <td>{name}</td>
             <td>{id}</td>
             <td>{age}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
  let header = Object.keys(this.state.students[0])
  return header.map((key, index) => {
     return <th className={styles.tHeader} key={index}>{key.toUpperCase()}</th>
  })
}

  render() {
    return (
      <Fragment>
        <h2 className={styles.studentsH2}>Students</h2>
        <div className={styles.container}>
          <table className={styles.students}>
             <tbody>
             <tr>
               {this.renderTableHeader()}
              </tr>
              {this.renderTableData()}
             </tbody>
          </table>
       </div>
      </Fragment>
    )
  }
} 

export default Students;

// <div className={styles.tableContainer}>
//           <table className={styles.table}>
//             <tbody>
//             <tr className={styles.tableTR}>
//               <th className={styles.tableTitle}>Name</th>
//               <th className={styles.tableTitle}>Email</th>
//               <th className={styles.tableTitle}></th>
//             </tr>
//             </tbody>
//             <tbody>
//             <tr>
//               <td className={styles.tableTitle}>Alfreds Futterkiste</td>
//               <td className={styles.tableTitle}>Maria Anders</td>
//               <button 
//                 className={styles.deleteBtn} 
//                 onClick={this.deleteStudent}
//                 >
//                 delete
//               </button>
//             </tr>
//             </tbody>
//             <tbody>
//             <tr>
//               <td className={styles.tableTitle}>Centro comercial Moctezuma</td>
//               <td className={styles.tableTitle}>Francisco Chang</td>
//                      <button 
//                 className={styles.deleteBtn} 
//                 onClick={this.deleteStudent}
//                 >
//                 delete
//               </button>
//             </tr>
//             </tbody>
//             <tbody>
//             <tr>
//               <td className={styles.tableTitle}>Aaliyah</td>
//               <td className={styles.tableTitle}>Aaliyah@gmail.com</td>
//                      <button 
//                 className={styles.deleteBtn} 
//                 onClick={this.deleteStudent}
//                 >
//                 delete
//               </button>
//             </tr>
//             </tbody>
//           </table>