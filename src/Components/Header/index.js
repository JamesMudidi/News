import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class Header extends Component {

	render() {

		return (
			<Navbar collapseOnSelect expand="lg" bg="primary" sticky="top" variant="dark">
				<div className="container">
					<Navbar.Brand href="/">OpenHouse News</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/">General</Nav.Link>
							<Nav.Link href="/sports">Sports</Nav.Link>
							<Nav.Link href="/entertainment">Entertainment</Nav.Link>
							<Nav.Link href="/technology">Technology</Nav.Link>
							<Nav.Link href="/business">Business</Nav.Link>
						</Nav>
						<Nav>
						<Nav.Link href="/source">Our Sources</Nav.Link>
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/register">Register</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}
export default Header;