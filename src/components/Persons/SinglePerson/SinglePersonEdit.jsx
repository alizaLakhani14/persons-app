import React from 'react';
import './SinglePersonEdit.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const SinglePersonEdit = (props) => {
	return (
		<div className="SinglePersonEdit">
			<input value={props.person.name} />
			<input type="number" value={props.person.age} />
			<textarea value={props.person.description} />
			<ButtonGroup aria-label="Basic example" className="button-group">
				<Button variant="light" className="button text-primary">
					<FontAwesomeIcon icon={faCheck} />
				</Button>
				<Button variant="light" className="button text-danger" onClick={props.EnablingInfoMode }>
					<FontAwesomeIcon icon={faTimes} />
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default SinglePersonEdit;
