import React from 'react';
import { DatePicker, Space, Input } from 'antd';
import moment from 'moment';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';

const styles = {
	input: {
		width: '90%',
		outline: 'none',
		height: '44px',
	},
};

const RewardSettingsForm = () => {
	const { vestings, setVesting } = useDetails();

	let addFormFields = () => {
		setVesting([...vestings, { date: '', amount: '' }]);
	};

	// let removeFormFields = (i) => {
	// 	let newFormValues = [...vesting];
	// 	newFormValues.splice(i, 1);
	// 	setVesting(newFormValues);
	// };

	// parseInt((new Date(date._d)/1000).toFixed(0));
	// parseInt((new Date(dateString).getTime() / 1000).toFixed(0));

	return (
		<div className=' mt-6'>
			{/* <h1 className='text-lg text-supagreen-light'>Vesting Aggrement</h1> */}
			<form className=''>
				{vestings.map((vesting, index) => (
					<div className='grid gap-4 grid-cols-2' key={index}>
						<div className='flex flex-col'>
							<h3 className=' text-2xl text-slate-100'>Vesting Date</h3>{' '}
							<Space direction='vertical' size={'large'}>
								<input
									className='bg-supadark-dark text-white'
									style={styles.input}
									value={vesting.date}
									type={'date'}
									onChange={(e) => {
										setVesting(
											[...vestings].map((object) => {
												console.log('object:::', e.target.value);
												if (object.date === vesting.date) {
													return {
														...object,
														date: e.target.value,
													};
												} else {
													return object;
												}
											})
										);
									}}
								/>
							</Space>
						</div>

						<div className='flex flex-col'>
							<h3 className=' text-2xl text-slate-100'>Vesting Amount</h3>
							<Input
								style={styles.input}
								title={'Vesting Amount'}
								value={vesting.amount}
								onChange={(e) => {
									setVesting(
										[...vestings].map((object) => {
											console.log('object:::', object);
											if (object.amount === vesting.amount) {
												return {
													...object,
													amount: e.target.value,
												};
											} else {
												return object;
											}
										})
									);
								}}
							/>
						</div>
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
