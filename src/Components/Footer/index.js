import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import './footer.css';

const Footer = () => {
	return (
		<footer className='footer bg-grey text-dark'>
			<Navbar expand="lg" variant="light" sticky="bottom">
				<div className="container">
					<Nav>
						<Nav.Item>
							<Nav.Link href="/" className='font-weight-bold'>
								&copy; {new Date().getFullYear()} OpenHouse News
							</Nav.Link>
						</Nav.Item>
					</Nav>
					<Nav className="justify-content-end font-weight-bold">
						<Nav.Item>
							<Nav.Link href="#">Terms</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#">About Us</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#">Contact Us</Nav.Link>
						</Nav.Item>
					</Nav>
				</div>
			</Navbar>
		</footer>
	);
};

export default Footer;
