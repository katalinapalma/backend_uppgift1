import React, { Component, Fragment } from 'react';
import styles from '../components/Students.module.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      city: '',
      street: '',
      zipcode: '',
    }
  }

  handleInputName = (e) => {
    this.setState({name: e.target.value});
    e.preventDefault();
  };

  handleInputEmail = (e) => {
    this.setState({email: e.target.value});
    e.preventDefault();
  };

  handleInputCity = (e) => {
    this.setState({city: e.target.value});
    e.preventDefault();
  };
  
  handleInputStreet = (e) => {
    this.setState({street: e.target.value});
    e.preventDefault();
  };

  handleInputZipcode = (e) => {
    this.setState({zipcode: e.target.value});
    e.preventDefault();
  };

  createStudent = (e) => {
    console.log('created')
    e.preventDefault();
    const student = {
      email: this.state.email,
      name: this.state.name,
        address: {
          city: this.state.city,
          street: this.state.street,
          zipcode: this.state.zipcode,
        }
    }
    fetch('http://localhost:2000/students', {
      method: 'post',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    }).then(res=>res.json())
      .then(res => {
        this.setState({
          name: res.name,
          email: res.email,
          city: res.city,
          street: res.street,
          zipcode: res.zipcode,
        })
      })
  }

  render() {
    return (
      <Fragment>
       <h3 className={styles.studentsH3}>Want to create a student?</h3>
       <div className={styles.container}>
         <form className={styles.form}>
            <label htmlFor="name" className={styles.formTitles}>Name:</label>
            <input 
              type="text" 
              value={this.state.name || ''}  
              onChange={this.handleInputName}
              className="form-control" 
              placeholder='name'>
            </input>
            <label htmlFor="email" className={styles.formTitles}>Email:</label>
            <input 
              type="email" 
              value={this.state.email || ''}  
              onChange={this.handleInputEmail}
              className="form-control" 
              placeholder='email'>
            </input>
            <label htmlFor="address" className={styles.formTitles}>Address:</label>
            <input 
              type="text" 
              value={this.state.city || ''}  
              onChange={this.handleInputCity}
              className="form-control mt-1" 
              placeholder='city'>
            </input>
            <input 
              type="text" 
              value={this.state.street || ''}  
              onChange={this.handleInputStreet}
              className="form-control mt-1" 
              placeholder='street'>
            </input>
            <input 
              type="text" 
              value={this.state.zipcode || ''}  
              onChange={this.handleInputZipcode}
              className="form-control mt-1" 
              placeholder='zip code'>
            </input>
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
