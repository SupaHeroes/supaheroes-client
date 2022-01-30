import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Account from './moralis/Account/Account';
import Chains from './moralis/Chains/Chains';

import logo from '../assets/logo/SUPALOGO.png';

const { Header } = Layout;

const HeaderContainer = () => {
	return (
		<Header
			style={{
				height: 80,
				background: '#0D1016',
				position: 'fixed',
				zIndex: 1,
				width: '100%',
			}}
			className='flex border-b border-gray-500 border-opacity-40 justify-center items-center '
		>
			<div>
				<img src={logo} alt='logo' className='h-16 w-auto mr-11' />
			</div>

			<Menu
				mode='horizontal'
				style={{
					background: '#0D1016',
					textDecoration: 'none',
					border: 'none',
					marginLeft: '40px',
				}}
				className='w-full'
			>
				<Menu.Item key='1'>
					<Link className='text-md font-light' to='/'>
						Explore
					</Link>
				</Menu.Item>
				<Menu.Item key='2'>
					<Link className='text-md font-light' to='/grants'>
						Grants
					</Link>
				</Menu.Item>
				<Menu.Item key='3' className=''>
					<Link className='text-md font-light' to='/campaign'>
						Start a Campaign
					</Link>
				</Menu.Item>{' '}
			</Menu>

			<Chains />
			<Account />
		</Header>
	);
};

export default HeaderContainer;
