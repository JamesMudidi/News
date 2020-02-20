import React, { Component } from 'react';
import { Card, CardColumns, Button, Row, Col } from 'react-bootstrap';
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			articles: []
		};
	}

	componentDidMount() {
		fetch('https://newsapi.org/v2/top-headlines?language=en&apiKey=ee3998a05fc34b3e9f25cce1509dbfd2')
			.then(res => res.json())
			.then((data) => {
				this.setState({ loading: false, articles: data.articles })
				console.log(this.state.articles)
			})
			.catch(console.log)
	}

	render() {
		return (
			<div className="container">
				<h1>Headlines</h1>
				<div>
					<div className="sweet-loading">
						<CircleLoader
							css={override}
							size={150}
							color={"#007BFF"}
							loading={this.state.loading}
						/>
					</div>
					<CardColumns>
						{this.state.articles.map((articles) => (
							<Row>
								<Col xl={12}>
									<Card keys={Object.keys(articles)}>
										<Card.Img variant="top" src={articles.urlToImage} />
										<Card.Body>
											<Card.Title>{articles.title}</Card.Title>
											&nbsp;
										<Card.Text>{articles.description}</Card.Text>
											<Button variant="primary" href={articles.url} target="_blank">Read more</Button>
										</Card.Body>
										<Card.Footer className="text-muted">Author: {articles.author}<br />Source: {articles.source.name}</Card.Footer>
									</Card>
								</Col>
							</Row>
						))}
					</CardColumns>
					<br />
				</div>
			</div>
		);
	}
}
export default Content;
