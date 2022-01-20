import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Account from "./moralis/Account/Account";
import Chains from "./moralis/Chains/Chains";

import logo from '../assets/logo/SUPALOGO.png';
import { useMoralis } from 'react-moralis';

const { Header } = Layout;

const HeaderContainer = () => {
	const { authenticate, isAuthenticated, user } = useMoralis();
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
				<img src={logo} alt='logo' className='h-24 w-auto mr-11' />
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
			<Account/>
			{/* <Button
				size='large'
				style={{
					background: 'transparent',
					marginRight: 34,
					fontSize: '16px',
					fontWeight: 700,
					border: '2px solid #67E9F1',
				}}
			>
				Avalanche
			</Button>

			{!isAuthenticated ? (
				<Button
					type='primary'
					size='large'
					style={{
						fontSize: '16px',
						color: 'black',
						fontWeight: 700,
					}}
					onClick={() => authenticate()}
				>
					Connect Wallet
				</Button>
			) : (
				<div>
					<p>{user.get('ethAddress')}</p>
				</div>
			)} */}
		</Header>
	);
};

export default HeaderContainer;

