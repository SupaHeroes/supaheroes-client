import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/SUPALOGO.png';

const Header = () => {
	return (
		<div className='flex  items-center bg-supadark'>
			<div className='h-20 w-24   flex content-end'>
				<img src={logo} alt='logo' className='h-24 w-auto' />
			</div>

			<div className='flex justify-between items-center w-full '>
				<div className=' flex items items-baseline  ml-28'>
					<Link className='mr-8 text-supagreen-light text-xl font-bold' to='/'>
						Explore
					</Link>
					<Link
						className='mr-8 text-supagreen-light text-xl  font-bold'
						to='/grants'
					>
						Grants
					</Link>
					<Link
						className='text-supagreen-light text-xl  font-bold'
						to='/campaign'
					>
						Start a Campaign
					</Link>
				</div>

				<div className='flex justify-between '>
					<button className=' text-supagreen-light font-bold border-2 py-1 px-4 rounded border-supagreen'>
						{' '}
						Avalanche
					</button>
					<button className='ml-11 font-bold mr-11 text-supadark-dark py-1 px-4 rounded bg-supagreen'>
						Connect Wallet
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
