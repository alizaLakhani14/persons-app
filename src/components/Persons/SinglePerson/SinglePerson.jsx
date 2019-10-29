import React from 'react';
import './SinglePerson.css';
import { Card } from 'react-bootstrap';
import SinglePersonInfo from './SinglePersonInfo';
import SinglePersonEdit from './SinglePersonEdit';

const SinglePerson = (props) => {
	return (
		<Card style={{ width: '18rem' }} className="SinglePerson">
			{props.person.isEditModeEnabled ? (
				<SinglePersonEdit person={props.person}
				EnablingInfoMode = {props.disableEditMode} />
			) : (
				<SinglePersonInfo person={props.person} 
				EditModeEnable={props.makingEditModeEnabled}
				deletePerson = {props.deletingPerson}
				/>
			)}
		</Card>
	);
};

export default SinglePerson;
