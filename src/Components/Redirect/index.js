import React from 'react';
import { Modal, Button } from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="sm"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Redirect
        </Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Hello, You are now going to be ridirected to the article site
        </p>
			</Modal.Body>
			<Modal.Footer>
			<Button onClick={props.onHide}>Continue</Button>
			</Modal.Footer>
		</Modal>
	);
}

function AppModel() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Read More
      </Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	);
}

export default AppModel;
