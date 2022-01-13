import React, { useState } from 'react';
import Input from './Form';

const RewardSettingsForm = () => {
	const [formValues, setFormValues] = useState([{ name: '', email: '' }]);

	let handleChange = (i, e) => {
		let newFormValues = [...formValues];
		newFormValues[i][e.target.name] = e.target.value;
		setFormValues(newFormValues);
	};

	let addFormFields = () => {
		setFormValues([...formValues, { date: '', amount: '' }]);
	};

	let removeFormFields = (i) => {
		let newFormValues = [...formValues];
		newFormValues.splice(i, 1);
		setFormValues(newFormValues);
	};

	return (
		<div className=' mt-6'>
			<h1 className='text-lg text-supagreen-light'>Vesting Aggrement</h1>
			<form className=''>
				{formValues.map((element, index) => (
					<div className='grid gap-4 grid-cols-2' key={index}>
						<Input onChange={(e) => handleChange(index, e)} />
						<Input onChange={(e) => handleChange(index, e)} />
					</div>
				))}
			</form>

			<div className='p-7 w-full flex justify-center items-center  pr-20'>
				<button
					className='bg-supagreen py-3 px-4 text-lg font-bold text-supadark-light rounded-lg'
					onClick={() => addFormFields()}
				>
					Add more
				</button>
			</div>
		</div>
	);
};

export default RewardSettingsForm;
