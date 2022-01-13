import React from 'react';

const Input = ({ title }) => {
	return (
		<div className='mb-4'>
			{title !== '' ? (
				<h1 className='text-2xl text-slate-100'>{title}</h1>
			) : null}

			<input
				className=' mt-4 w-11/12 h-11 bg-supadark outline-none p-4 text-lg'
				type='text'
				name={title}
			/>
		</div>
	);
};

export default Input;
