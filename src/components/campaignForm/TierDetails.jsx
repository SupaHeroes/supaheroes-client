import React from 'react';
import { Input } from 'antd';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';

const styles = {
	input: {
		width: '90%',
		outline: 'none',
		height: '44px',
	},
};

const TierDetails = () => {
	const { tiers, setTiers, setMetadata, metadata } = useDetails();

	let addFormFields = () => {
		setTiers([...tiers, { title: '', description: '', price: '' }]);
	};

	// let removeFormFields = (i) => {
	// 	let newFormValues = [...tiers];
	// 	newFormValues.splice(i, 1);
	// 	setTiers(newFormValues);
	// };

	return (
		<div className=' mt-6'>
			<form className=''>
				{tiers.map((tier, index) => (
					<div key={index} className='mt-10 bg-supadark p-6 rounded-xl'>
						<h3 className=' text-2xl text-white font-bold'>{`Tier ${
							index + 1
						}`}</h3>
						<div className='grid gap-4 grid-cols-2' key={index}>
							<div className='flex flex-col'>
								<h3 className=' text-supagreen-dark text-slate-100'>Title</h3>
								<Input
									style={styles.input}
									title={'Title'}
									value={tier.title}
									onChange={(e) => {
										setTiers(
											[...tiers].map((object) => {
												if (object.title === tier.title) {
													return {
														...object,
														title: e.target.value,
													};
												} else {
													return object;
												}
											})
										);

										setMetadata({ ...metadata, tiers: tiers });
									}}
								/>
							</div>
							<div className='flex flex-col'>
								<h3 className=' text-supagreen-dark text-slate-100'>Message</h3>
								<Input
									style={styles.input}
									title={'description'}
									value={tiers[index].description}
									onChange={(e) => {
										setTiers(
											[...tiers].map((object) => {
												if (object.description === tier.description) {
													return {
														...object,
														description: e.target.value,
													};
												} else {
													return object;
												}
											})
										);
										setMetadata({ ...metadata, tiers: tiers });
									}}
								/>
							</div>

							<div className='flex flex-col'>
								<h3 className=' text-supagreen-dark text-slate-100'>Price</h3>
								<Input
									style={styles.input}
									title={'Price'}
									value={tiers[index].price}
									onChange={(e) => {
										setTiers(
											[...tiers].map((object) => {
												if (object.price === tier.price) {
													return {
														...object,
														price: e.target.value,
													};
												} else {
													return object;
												}
											})
										);
										setMetadata({ ...metadata, tiers: tiers });
									}}
								/>
							</div>

							<div className='flex flex-col'>
								<h3 className='text-supagreen-dark text-slate-100'>
									Quantities
								</h3>
								<Input
									style={styles.input}
									title={'Quantities'}
									value={tiers[index].quantities}
									onChange={(e) => {
										setTiers(
											[...tiers].map((object) => {
												if (object.quantities === tier.quantities) {
													return {
														...object,
														quantities: e.target.value,
													};
												} else {
													return object;
												}
											})
										);
										setMetadata({ ...metadata, tiers: tiers });
									}}
								/>
							</div>
						</div>
					</div>
				))}
			</form>

			<div className='p-7 w-full flex justify-center items-center  pr-20'>
				<button
					className=' py-3 px-4 text-lg font-bold font-inter text-supadark-light rounded-lg'
					onClick={() => addFormFields()}
				>
					+ Add more
				</button>
			</div>
		</div>
	);
};

export default TierDetails;
