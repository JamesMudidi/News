import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import axios from 'axios';
import './index.css'


class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			email: '',
			password: ''
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
		const { email, password } = this.state

		const config = {
			headers: { 'Content-Type': 'application/json' },
			responseType: 'application/json'
		};

		const userData = {
			email: email,
			password: password
		};

		axios.post(
			'http://localhost:8000/api/v1/login',
			userData,
			config,
			{ withCredentials: true }
		)
			.then(response => {
				if (response.data.success === true) {
					localStorage.setItem('email', response.data.email);
					window.location.assign('/')
					console.log('login response', response.data.email);
				}
			})
			.catch(error => {
				console.log('login error', error);
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
						type='email'
						name='email'
						placeholder='Email'
						value={this.state.email}
						onChange={this.handleChange}
						required
						className="input"
					/>
					<br />
					<input
						type='password'
						name='password'
						placeholder='Password'
						value={this.state.password}
						onChange={this.handleChange}
						required
						className="input"
					/>
					<br />
					<Button type='submit'>Login</Button>
				</form>
				</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Login;
