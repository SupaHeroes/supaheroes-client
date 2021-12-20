import React from 'react';
import { MdOutlineTimer } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';

const Card = () => {
	return (
		<div className='m-4 bg-supadark-light h-auto w-80 rounded-lg'>
			<img
				src='https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
				alt='project'
				className='w-96 h-72 overflow-clip'
			/>

			<div className='flex justify-between items-center mt-6 px-4'>
				<p className='text-white font-bold text-lg'>23 Eth</p>

				<p className='flex items-center  text-white font-bold text-sm'>
					{' '}
					<MdOutlineTimer className='mr-2' /> 5d 20h left
				</p>
			</div>

			<h3 className='text-white font-bold text-xl p-3 break-all'>
				Newton | The crypto Laptop
			</h3>

			<p className='text-white text-lg p-2 break-words'>
				Newton is a new kind of laptop. It is purposely build for blockchain
				apps asfdasfasfasfa assfs fas fasfasfsa f
			</p>

			<div className='flex justify-center items-center text-white text-lg'>
				<p>Read More</p>
				<BsArrowRight className='ml-2 mb-4' />
			</div>
		</div>
	);
};

export default Card;
