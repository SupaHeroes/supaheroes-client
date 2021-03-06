import React, { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { Breadcrumb, Progress, Menu, Space, Skeleton } from 'antd';
import axios from 'axios';
import { useMoralis } from 'react-moralis';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { MdOutlineTimer } from 'react-icons/md';
import ProjectButton from '../components/projects/ProjectButton';
import { useDetails } from '../hooks/contextHooks/DetailsContext';
import tokenABI from '../abi/Token.json';

const Project = () => {
	const { metadata } = useDetails();
	const params = useParams();
	const { Moralis, isInitialized } = useMoralis();

	const [newMetadata, setNewMetadata] = useState();
	const [balance, setBalance] = useState(0);
	const [isLoading, setLoading] = useState(false);

	async function getBalance(currency) {
		const res = await Moralis.executeFunction({
			contractAddress: currency,
			functionName: 'balanceOf',
			abi: tokenABI,
			params: {
				account: params.campaignId,
			},
		});
		console.log('reward::::', res);
		setBalance(res);
		return res;
	}

	const getProjectIPFS = async () => {
		try {
			setLoading(true);
			const project = Moralis.Object.extend('campaigns');
			const query = new Moralis.Query(project);
			query.equalTo('address', `${params.campaignId}`);
			const results = await query.find();
			const newIPFS = results[0].get('metadata');
			setLoading(false);
			return newIPFS;
		} catch (error) {
			console.log(error);
		}
	};
	const getMetadata = async () => {
		try {
			setLoading(true);
			const ipfs = await getProjectIPFS();
			const response = await axios.get(ipfs);
			await setNewMetadata(response.data);

			await getBalance(response.data.currency);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	function timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes();
		var sec = a.getSeconds();
		var time = date + ' ' + month + ' ' + year + ' ';

		return time;
	}

	const checkCurrency = (currency) => {
		if (currency === '0x51203d73c94273C495F5d515dE87795649c21D53') {
			return 'QiUSDC';
		} else if (currency === '0x45ea5d57BA80B5e3b0Ed502e9a08d568c96278F9') {
			return 'USDC';
		} else if (currency === '0x0eaC97A78a93B75549D49145dF41DbE9CD520874') {
			return 'YRT';
		} else if (currency === '0x39A7feB2cB226c632731346e74BF8D33DF44cAA2') {
			return 'SUPA';
		} else {
			return 'N/A';
		}
	};

	useEffect(() => {
		if (isInitialized) {
			setLoading(true);
			getMetadata();

			setLoading(false);
		}
		console.log('newMetadata', newMetadata);
	}, [isInitialized, isLoading]);

	// console.log('newMetadata', newMetadata);

	return !isLoading ? (
		<div className='mt-20 bg-supadark-black'>
			<div className=' flex justify-center text-3xl  '>
				<div className='w-4/6 mt-8 '>
					<Breadcrumb className='' separator='>'>
						<Breadcrumb.Item>
							<Link className='' to='/'>
								Explore
							</Link>
						</Breadcrumb.Item>

						<Breadcrumb.Item>{newMetadata?.title}</Breadcrumb.Item>
					</Breadcrumb>
					<div className='flex flex-col lg:flex-row  '>
						<div className='lg:w-10/12'>
							<img
								className='  h-auto max-h-96 min-w-full object-cover rounded-[6%] pt-4'
								src={newMetadata?.images[0].data_url}
								alt='project display'
							/>
							<div className='flex pt-4'>
								{newMetadata?.images.map((image, i) => (
									<img
										key={i}
										className='w-16 flex-1 h-auto max-h-24 object-cover rounded-[15%]  pr-4'
										src={image.data_url}
										alt='project display'
									/>
								))}
							</div>
						</div>

						<div className='flex flex-col justify-between w-full'>
							<div className='p-8'>
								<h1 className='text-white font-cormorant font-bold uppercase text-5xl'>
									{newMetadata?.title}
								</h1>

								<div className='flex flex-wrap justify-start items-center'>
									<Space>
										<ProjectButton
											title={'Website'}
											link={newMetadata?.website}
										/>
										<ProjectButton
											link={newMetadata?.whitepaper}
											title={'Whitepaper'}
										/>
										<ProjectButton
											link={`https://testnet.snowtrace.io/address/${params.campaignId}`}
											title={'Smart Contract'}
										/>
									</Space>
								</div>

								<div className='mt-8 w-full'>
									<p className='flex items-center -mb-1 text-white font-bold text-xl '>
										{' '}
										<MdOutlineTimer className='mr-2 ' />
										{/* 5d 20h left */}
										{`End Date: ${timeConverter(
											newMetadata?.details?.endDate
										)}`}
									</p>
									<Skeleton loading={!balance}>
										<Progress
											percent={
												(Moralis.Units.FromWei(balance) /
													parseInt(newMetadata?.details?.fundingTarget * 10)) *
												100
											}
											size='large'
											strokeWidth='10px'
											strokeColor={{
												'0%': '#79D38A',
												'100%': '#269BA8',
											}}
											showInfo={false}
										/>
									</Skeleton>

									<div className='flex justify-between  items-center mt-3'>
										<p className='text-white font-bold  text-lg'>
											{parseInt(newMetadata?.details?.fundingTarget * 10) -
												Moralis.Units.FromWei(balance)}{' '}
											{checkCurrency(newMetadata?.currency)} Remaining
										</p>
										<p className='text-white font-bold  text-lg'>
											{/* {assets[0].balance} */}
											{Moralis.Units.FromWei(balance)}{' '}
											{checkCurrency(newMetadata?.currency)} Backed
										</p>
									</div>
								</div>
							</div>

							<div
								className={`flex flex-col justify-center ${
									newMetadata?.vestings[0]?.date === ''
										? 'bg-red-400'
										: 'bg-supadark'
								}   border border-supagreen-dark w-11/12 text-white items-start pl-16 py-5  mx-8`}
							>
								<h3 className='flex justify-center items-center text-white text-lg h-auto'>
									{' '}
									<SafetyCertificateOutlined className='mr-3' /> This campaign
									is
									{newMetadata?.vestings[0]?.date === ''
										? ' not vested'
										: ' vested'}
								</h3>
								<a
									href='https://docs.supaheroes.fund/reward-based-campaign/vested-campaign'
									className=' font-inter text-sm text-supadark-light underline'
								>
									Learn more about vested campaign
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex justify-center mt-12'>
				<div className='  w-4/6 '>
					<Menu
						mode='inline'
						defaultSelectedKeys={['1']}
						theme='dark'
						style={{
							backgroundColor: 'transparent',
							textDecoration: 'none',
							fontSize: '18px',
							border: 'none',
							display: 'flex',
						}}
						// className='w-full'
					>
						<Menu.Item key='1'>
							<Link to='' className='font-inter'>
								Story
							</Link>
						</Menu.Item>
						<Menu.Item key='2'>
							<Link to='transaction' className='font-inter'>
								Transaction
							</Link>
						</Menu.Item>
						<Menu.Item key='3'>
							<Link to='certificate' className='font-inter'>
								Dispute
							</Link>
						</Menu.Item>
						<Menu.Item key='4' className=''>
							<Link to='vesting' className='font-inter'>
								Vesting Term
							</Link>
						</Menu.Item>
						<Menu.Item key='5' className=''>
							<Link to='contract' className='font-inter'>
								Marketplace
							</Link>
						</Menu.Item>
					</Menu>

					<div className='mt-16'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	) : (
		<div> Loading!!!! Please Wait</div>
	);
};

export default Project;
