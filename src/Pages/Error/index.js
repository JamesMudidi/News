import React from 'react'
import { Button } from 'react-bootstrap';
import './error.css'

class Error extends React.Component {
	render() {
		return (
			<div>
				<error className='error404'>404</error><br />
				<text className='errorText'>Sorry page not found</text>
				<Button href='/' className='errorButton' variant="primary">Back Home</Button>
			</div>
		)
	}
}
export default Error
