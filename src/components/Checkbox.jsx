import React from 'react';

const Checkbox = ({ name, value }) => {
	return (
		<div className='flex justify-start items-center ml-2'>
			<input type='checkbox' name={value} value={value} />
			<label className='ml-2 text-white text-base '>{name}</label>
		</div>
	);
};

export default Checkbox;
