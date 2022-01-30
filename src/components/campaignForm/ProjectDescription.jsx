import React from 'react';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';
import ProjectDetailsForm from './ProjectDetailsForm';

const ProjectDescription = () => {
	const { details, setDetails, metadata, setMetadata } = useDetails();

	const handleChange = (e) => {
		setDetails({ ...details, about: e.target.value });
		setMetadata({ ...metadata, details: details });
	};
	return (
		<div className=' mt-6 rounded-xl'>
			<h1 className='text-white text-lg font-bold'>
				Tell us about your project
			</h1>
			<p>
				Keep in mind this will be permanent. Do multiple reviews before final
				submission
			</p>

			<textarea
				onChange={handleChange}
				className='w-full outline-none bg-supadark-black p-6 text-lg font-serif border border-supagreen-dark'
				id='story'
				name='story'
				rows='10'
				cols='30'
				style={{ resize: 'none' }}
				value={details.about}
			></textarea>

			<ProjectDetailsForm />
		</div>
	);
};

export default ProjectDescription;
