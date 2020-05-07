import React, { Component, Fragment } from 'react';
import styles from '../components/Students.module.css';

class Form extends Component {
  render() {
    return (
      <Fragment>
       <h3 className={styles.studentsH3}>Want to create a student?</h3>
       <div className={styles.container}>
         <form className={styles.form}>
            <label htmlFor="name" className={styles.formTitles}>Name:</label>
            <input type="text" className="form-control" placeholder='name'></input>
            <label htmlFor="email" className={styles.formTitles}>Email:</label>
            <input type="email" className="form-control" placeholder='email'></input>
            <label htmlFor="address" className={styles.formTitles}>Address:</label>
            <input type="text" className="form-control mt-1" placeholder='city'></input>
            <input type="text" className="form-control mt-1" placeholder='street'></input>
            <input type="text" className="form-control mt-1" placeholder='zip code'></input>
            <button 
              type="button" 
              className="btn btn-dark mt-3"
              onClick={this.createStudent}>
                Create
            </button>
         </form>
       </div>
      </Fragment>
    )
  }
} 

export default Form;