import React, { useState } from 'react';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';

const ProjectDescription = () => {
	const { details, setDetails } = useDetails();
	

	const handleChange = (e) => {
		setDetails({ ...details, about: e.target.value });
		console.log(details.about);
	
	};
	return (
		<div className=' mt-6'>
			<h1 className='text-supagreen-light text-lg font-bold'>
				Tell us about your project
			</h1>
			<p>
				Keep in mind this will be permanent. Do multiple reviews before final
				submission
			</p>

			<textarea
				onChange={handleChange}
				className='w-full outline-none bg-supadark-dark p-6 text-lg font-serif'
				id='story'
				name='story'
				rows='10'
				cols='30'
				style={{ resize: 'none' }}
				value={details.about}
			></textarea>
		</div>
	);
};

export default ProjectDescription;
