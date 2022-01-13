import React from 'react';
import Input from './Form';

const ProjectDetailsForm = () => {
	return (
		<div className=' mt-6'>
			<form className='grid gap-4 grid-cols-2'>
				<Input title={'Campaign Symbol'} />
				<Input title={'Project Name'} />
				<Input title={'Short Description'} />
				<Input title={'Funding Period'} />
				<Input title={'Funding Goal'} />
				<Input title={'Select Currency'} />
			</form>
		</div>
	);
};

export default ProjectDetailsForm;
