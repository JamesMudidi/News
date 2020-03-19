import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Login from '../../Components/Login';
import Signup from '../../Components/Signup';
import './index.css'


class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			articles: []
		};
	}

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<div className="contain">
						<div>
							<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
								<Tab eventKey="home" title="Login">
									<div className="tab">
										<Login />
									</div>
								</Tab>
								<Tab eventKey="profile" title="Signup">
								<div className="tab">
									<Signup />
								</div>
								</Tab>
							</Tabs>
							<br />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Content;
