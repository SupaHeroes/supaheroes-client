import React, { useState } from 'react';
import { Input } from 'antd';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';

const styles = {
	input: {
		width: '90%',
		outline: 'none',
		height: '44px',
	},
};

const TierForm = ({ tierNumber }) => {
	const { tiers, setTiers } = useDetails();

	const [input, setInput] = useState({
		title: '',
		description: '',
		price: '',
	});

	return (
		<form className=''>
			<div className='mt-10 bg-supadark p-6 rounded-xl'>
				<h3 className=' text-2xl text-supagreen-light font-bold'>{`Tier ${tierNumber}`}</h3>
				<div className='grid gap-4 grid-cols-2'>
					<div className='flex flex-col'>
						<h3 className=' text-2xl text-slate-100'>Title</h3>
						<Input
							style={styles.input}
							title={'Title'}
							placeholder='Fine Neighbour'
							// value={tiers[index].title}
							onChange={(e) => {}}
						/>
					</div>
					<div className='flex flex-col'>
						<h3 className=' text-2xl text-slate-100'>Message</h3>
						<Input
							style={styles.input}
							title={'description'}
							placeholder='You saved us! Be a part of our family!'
							onChange={(e) => {
								setTiers([
									...tiers,
									{ ...tiers[tierNumber - 1], description: e.target.value },
								]);
								console.log(tiers);
							}}
						/>
					</div>

					<div className='flex flex-col'>
						<h3 className=' text-2xl text-slate-100'>Price</h3>
						<Input
							style={styles.input}
							title={'Price'}
							placeholder='$50'
							onChange={(e) => {
								setTiers([
									...tiers,
									{ ...tiers[tierNumber - 1], price: e.target.value },
								]);
								console.log(tiers);
							}}
						/>
					</div>
				</div>
			</div>
		</form>
	);
};

export default TierForm;
