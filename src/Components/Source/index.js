import React, { Component } from 'react';
import { Card, CardColumns, Button, Row, Col } from 'react-bootstrap';
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Source extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			sources: []
		};
	}

	componentDidMount() {
		fetch('https://newsapi.org/v2/sources?language=en&apiKey=ee3998a05fc34b3e9f25cce1509dbfd2')
			.then(res => res.json())
			.then((data) => {
				this.setState({ loading: false, sources: data.sources })
				console.log(this.state.sources)
			})
			.catch(console.log)
	}

	render() {

		return (
			<div>
				<Header />
				<div className="container">
					<h1>Sources</h1>
					<div className="sweet-loading">
						<CircleLoader
							css={override}
							size={150}
							color={"#007BFF"}
							loading={this.state.loading}
						/>
					</div>
					<CardColumns>
						{this.state.sources.map((sources) => (
							<Row>
								<Col xs={12}>
									<Card keys={Object.keys(sources)} xs={3}>
										<Card.Img variant="top" src={sources.urlToImage} />
										<Card.Body>
											<Card.Title>{sources.name}</Card.Title>
											&nbsp;
									    <Card.Text>{sources.description}</Card.Text>
											<Button variant="primary" href={sources.url} target="_blank">Read more</Button>
										</Card.Body>
										<Card.Footer className="text-muted">Category: {sources.category}<br />Source: {sources.name}</Card.Footer>
									</Card>
								</Col>
							</Row>
						))}
					</CardColumns>
					<br />
				</div>
				<Footer />
			</div>
		);
	}
}
export default Source;