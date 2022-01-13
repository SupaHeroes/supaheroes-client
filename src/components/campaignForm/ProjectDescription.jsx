import React from 'react';

const ProjectDescription = () => {
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
				className='w-full outline-none bg-supadark-dark p-6 text-lg font-serif'
				id='story'
				name='story'
				rows='10'
				cols='30'
				style={{ resize: 'none' }}
			></textarea>
		</div>
	);
};

export default ProjectDescription;
