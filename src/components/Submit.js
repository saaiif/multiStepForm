import React from 'react';
import Address from './Address'
const Submit = ({ navigation }) => {
	const { go } = navigation;
	return (
		<div className="form">
			<h3>Thank you for submitting. We will be in touch</h3>
			New Form -> <button onClick={() => go('names')}>New</button>
		</div>
	);
};

export default Submit;
