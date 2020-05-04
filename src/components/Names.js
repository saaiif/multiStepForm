import React from 'react';

import ItemForm from './ItemForm';

const Names = ({ setForm, formData, navigation }) => {
	const { firstName, lastName, nickName } = formData;

	const { next } = navigation;

	const colors = {
		color: 'rgb(197, 250, 8)'
	};

	return (
		<div className="form">
			<div>
				<h1 style={colors}>Multi-Step Form</h1>
			</div>
			<ItemForm label="First Name" name="firstName" value={firstName} onChange={setForm} />
			<ItemForm label="Last Name" name="lastName" value={lastName} onChange={setForm} />
			<ItemForm label="Nick Name" name="nickName" value={nickName} onChange={setForm} />
			<div>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};

export default Names;
