import React from 'react';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';

const Story = () => {
	const {openedProject, setOpenedProject} = useDetails();
	return (
		<div className='h-60 text-3xl '>
			<h1 className='text-supagreen-dark'>Story</h1>
			<p>{openedProject.description}</p>
		</div>
	);
};

export default Story;
