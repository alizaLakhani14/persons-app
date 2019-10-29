import React from 'react';
import { Button, Card, ButtonGroup } from 'react-bootstrap';
import './SinglePersonInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const SinglePersonInfo = (props) => {
	return (
		<Card.Body>
			<Card.Title>
				{props.person.name}, {props.person.age}
			</Card.Title>
			<Card.Text>{props.person.description}</Card.Text>
			<ButtonGroup aria-label="Basic example" className="button-group">
				<Button variant="light" className="button text-primary" onClick={props.EditModeEnable}>
					<FontAwesomeIcon icon={faEdit} />
				</Button>
				<Button variant="light" className="button text-danger" onClick={props.deletePerson}>
					<FontAwesomeIcon icon={faTrash} />
				</Button>
			</ButtonGroup>
		</Card.Body>
	);
};

export default SinglePersonInfo;
