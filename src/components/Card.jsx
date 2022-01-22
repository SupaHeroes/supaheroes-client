import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'antd';
import { MdOutlineTimer } from 'react-icons/md';
import { BsBookFill } from 'react-icons/bs';

const Card = ({date, title, shortdesc, image}) => {
	const navigate = useNavigate();
	const endDate = new Date(date);
	const days = endDate.getDate();
	const month = endDate.getMonth();
	const year = endDate.getFullYear();
	console.log(endDate);
	return (
		<div className=' bg-supadark font-sans h-auto rounded-lg border border-supadark-medium'>
			<img
				src={image}
				alt='project'
				className='w-full rounded-t-lg h-72 overflow-clip'
			/>

			<div className='mx-9'>
				<div className='flex justify-between  items-center mt-6 '>
					<p className='text-white font-bold font-inter text-xl uppercase'>23 Eth</p>
					<p className='flex items-center  text-white text-lg'>
						<MdOutlineTimer className='mr-2' /> {days + "/" + month + "/" + year}
					</p>
				</div>
				<Progress
					percent={70}
					strokeWidth={8}
					strokeColor={{
						'0%': '#79D38A',
						'100%': '#269BA8',
					  }}
					showInfo={false}
				/>
			</div>

			<div className='mx-7 pb-3'>
				<h3 className='text-white font-inter tracking-wide font-bold text-xl p-3 break-all'>
					{title}
				</h3>

				<p className=' text-gray-300 font-inter text-lg px-3 break-words'>
					{shortdesc}
				</p>
			</div>

			<div
				onClick={() => {
					navigate('/Newton');
				}}
				className='flex mx-9 rounded-md mb-6 justify-center items-center text-white bg-supadark-medium hover:bg-supagreen-dark text-lg cursor-pointer'
			>
				<BsBookFill />
				<p className="pt-4 pl-3">Read More</p>
				
			</div>
		</div>
	);
};

export default Card;
