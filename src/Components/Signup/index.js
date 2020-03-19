import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import axios from 'axios';
import './index.css'


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user_name: '',
      email: '',
      password: '',
      confirmed_password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { user_name, email, password, confirmed_password } = this.state

    const config = {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'application/json'
    };

    const userData = {
      user_name: user_name,
      email: email,
      password: password,
      confirmed_password: confirmed_password
    };

    axios.post(
      'http://localhost:8000/api/v1/register',
      userData,
      config,
      { withCredentials: true }
    )
      .then(response => {
        console.log('register response', response);
        if (response.data.success === true) {
          localStorage.setItem('username', response.data.user_name);
          window.location.assign('/')
        }
      })
      .catch(error => {
        console.log('register error', error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        				<Header />
				<div className="container">
				<div className="contain">
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='user_name'
            placeholder='Username'
            value={this.state.user_name}
            onChange={this.handleChange}
            required
            className="input"
          />

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
            required
            className="input"
          />

          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required
            className="input"
          />

          <input
            type='password'
            name='confirmed_password'
            placeholder='Confirm Password'
            value={this.state.confirmed_password}
            onChange={this.handleChange}
            required
            className="input"
          />

          <Button type='submit'>Register</Button>
        </form>
        </div>
				</div>
				<Footer />
      </div>
    );
  }
}

export default Register;
