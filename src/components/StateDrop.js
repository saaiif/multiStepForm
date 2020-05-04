import React from 'react';

const states = [ [ 'Kar', 'Karnataka' ], [ 'MUM', 'Mumbai' ], [ 'PUN', 'Punjab' ] ];

const StateDrop = ({ label, ...others }) => (
	<div>
		<label>{label}</label>
		<select {...others}>{states.map(([ value, name ]) => <option value={value}>{name}</option>)}</select>
	</div>
);

export default StateDrop;
