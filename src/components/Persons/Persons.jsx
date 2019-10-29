import React, { Component } from 'react';
import './Persons.css';
import './SinglePerson/SinglePerson';
import SinglePerson from './SinglePerson/SinglePerson';
class Persons extends Component {
	state = {
		personData: [
			{
				name: 'Dua',
				age: 5,
				description: 'Happiness Officer',
				isEditModeEnabled: false,
				id: 'dua'
			},

			{
				name: 'Aliza',
				age: 10,
				description: 'Comedian on Youtube',
				isEditModeEnabled: false,
				id: 'aliza'
			},

			{
				name: 'Bushra',
				age: 15,
				description: 'Chef at Marriot',
				isEditModeEnabled: false,
				id: 'bushra'
			}
		]
	};
	// Function for enabling Edit Mode
	makeEditModeEnable = (updatedState, id) => {
		const personIndex = this.state.personData.findIndex((p) => {
			return p.id === id;
		});
		const person = {
			...this.state.personData[personIndex]
		};
		person.isEditModeEnabled = updatedState;
		const persons = [ ...this.state.personData ];
		persons[personIndex] = person;

		this.setState({
			personData: persons
		});
	};
	// Function for deleting Person
	deletePerson = (personIndex) => {
		const persons = [ ...this.state.personData ];
		persons.splice(personIndex, 1);
		this.setState({ personData: persons });
	};

	render() {
		return (
			<div>
				<div className="Persons">
					<h1>Persons

					</h1>
					{this.state.personData.map((person, index) => (
						<SinglePerson
							person={person}
							key={person.id}
							makingEditModeEnabled={() => this.makeEditModeEnable(true, person.id)}
							deletingPerson={() => this.deletePerson(index)}
							disableEditMode = {() => this.makeEditModeEnable(false, person.id)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Persons;
