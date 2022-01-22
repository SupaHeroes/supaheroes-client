import React from 'react';
import { useState } from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import { useNavigate } from 'react-router-dom';
import { Button, notification } from 'antd';
import campaignABI from '../abi/StandardCampaignStrategy.json';
import factoryABI from '../abi/CampaignFactory.json';
import './campaign.css';
import backgroundImg from '../assets/Ring01.png';
import VestedForm from '../components/campaignForm/VestedForm';
import NotVestedForm from '../components/campaignForm/NotVestedForm';
import { useDetails } from '../hooks/contextHooks/DetailsContext';
import Transaction from '../components/projects/Transaction';

const Campaign = () => {
	const navigate = useNavigate();

	const { cloneAddress, setCloneAddress, isLoading, setIsLoading } =
		useDetails();

	const [isVested, setVested] = useState({
		started: false,
		withVested: false,
		withoutVested: false,
	});

	const { Moralis, chainId } = useMoralis();
	const [responses, setResponses] = useState({});

	/** Default function for showing notifications*/
	const openNotification = ({ message, description }) => {
		notification.open({
			placement: 'bottomRight',
			message,
			description,
		});
	};

	const options = {
		contractAddress: cloneAddress.NewCampaignAddress,
		functionName: 'initialize',
		abi: campaignABI,
		params: {
			_currency: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041',
			_metadata: 'https://www.supaheroes.com',
			_fundingEndTime: 1644926338,
			_fundTarget: 2000,
			_fundingStartTime: 1642334338,
			_vestingManager: '0x0000000000000000000000000000000000000000',
			_rewardManager: cloneAddress.rewardMaster,
		},
	};

	const initialise = async () => {
		const tx = await Moralis.executeFunction({
			awaitReceipt: false,
			...options,
		});
		console.log(tx);
		tx.on('transactionHash', (hash) => {
			setResponses({ ...responses, name: { result: null, isLoading: true } });
			openNotification({
				message: '🔊 New Transaction',
				description: `${hash}`,
			});
			console.log('🔊 New Transaction', hash);
		});
	};

	const options2 = {
		contractAddress: '0xe81eAffA679B00279f664877C57e895606dB55Cf',
		functionName: 'createCampaign',
		abi: factoryABI,
	};

	const createCampaign = async () => {
		setIsLoading(true);

		const tx = await Moralis.executeFunction({
			awaitReceipt: false,
			...options2,
		});
		console.log(tx);
		tx.on('transactionHash', (hash) => {
			setResponses({ ...responses, name: { result: null, isLoading: true } });
			openNotification({
				message: '🔊 New Transaction',
				description: `${hash}`,
			});
			console.log('🔊 New Transaction', hash);
		});
		tx.on('receipt', (receipt) => {
			const cloneAdd = receipt.events.NewCampaign.returnValues.contractAddress;
			const creator = receipt.events.NewCampaign.returnValues.creator;
			const rewardMaster = receipt.events.NewCampaign.returnValues.rewardMaster;

			setCloneAddress({
				NewCampaignAddress: `${cloneAdd}`,
				creator: `${creator}`,
				RewardMaster: `${rewardMaster}`,
				vestingMaster: '0x0000000000000000000000000000000000000000',
			});

			setIsLoading(false);
			navigate('/campaign/withoutvesting');
		});
	};

	const options3 = {
		contractAddress: '0xe81eAffA679B00279f664877C57e895606dB55Cf',
		functionName: 'createCampaignWithVesting',
		abi: factoryABI,
	};

	const createCampaignWithVesting = async () => {
		setIsLoading(true);

		const tx = await Moralis.executeFunction({
			awaitReceipt: false,
			...options3,
		});
		console.log(tx);
		tx.on('transactionHash', (hash) => {
			setResponses({ ...responses, name: { result: null, isLoading: true } });
			openNotification({
				message: '🔊 New Transaction',
				description: `${hash}`,
			});
			console.log('🔊 New Transaction', hash);
		});
		tx.on('receipt', (receipt) => {
			const cloneAdd = receipt.events.NewCampaign.returnValues.contractAddress;
			const creator = receipt.events.NewCampaign.returnValues.creator;
			const rewardMaster = receipt.events.NewCampaign.returnValues.rewardMaster;
			const vestingMaster =
				receipt.events.NewCampaign.returnValues.vestingMaster;

			setCloneAddress({
				NewCampaignAddress: `${cloneAdd}`,
				creator: `${creator}`,
				RewardMaster: `${rewardMaster}`,
				vestingMaster: `${vestingMaster}`,
			});

			setIsLoading(false);
			console.log(cloneAddress);
			navigate('/campaign/withvesting');
		});
	};

	return (
		<div className='mt-20 bg-supadark-black overflow-x-hidden flex justify-center items-center  overflow-y-hidden'>
			<div
				style={{
					backgroundImage: `url(${backgroundImg})`,
					backgroundPosition: 'center',
					backgroundSize: '800px 800px',
					backgroundRepeat: 'no-repeat',
					width: '100vw',
					height: '100vh',
					overflowX: 'none',
				}}
				className={` ${
					isLoading && `bg-image`
				} bg-supadark-dark flex justify-center items-center `}
			></div>

			{!isVested.started ? (
				<div className='flex flex-col justify-center items-center max-w-sm absolute h-full'>
					<h3 className='text-4xl font-bold text-supagreen-dark'>
						From Vision to reality
					</h3>
					<p className='text-center text-sm pb-3 font-light text-gray-300'>
						Business owners and creators are society's superheroes. Now it is
						time for society to give back and make their dream come true.
					</p>
					<Button
						style={{
							border: '1px solid #79D38A',
							borderRadius: '8px',
						}}
						onClick={() => {
							setVested({ ...isVested, started: true });
						}}
					>
						START CAMPAIGN
					</Button>
				</div>
			) : isLoading ? (
				<div className='flex flex-col justify-center items-center max-w-sm absolute h-full'>
					<h3 className='text-4xl font-bold text-supagreen-dark text-center'>
						Creating Campaign.
					</h3>
					<h3 className='text-4xl font-bold text-supagreen-dark'>
						Please Wait!!
					</h3>
					<p className='text-center text-sm'>
						Wait for transaction to complete.
					</p>
				</div>
			) : (
				<div className='flex flex-col justify-center items-center max-w-sm absolute h-full'>
					<h3 className='text-4xl font-bold text-supagreen-dark'>
						Choose Modes
					</h3>
					<Button
						style={{
							border: '1px solid #79D38A',
							borderRadius: '6px',
						}}
						onClick={() => {
							setVested({ ...isVested, withVesting: true });
							createCampaignWithVesting();
						}}
					>
						VESTED CAMPAIGN (RECOMMENDED)
					</Button>

					<Button
						style={{
							border: '1px solid #79D38A',
							borderRadius: '6px',
							marginTop: '12px',
						}}
						onClick={() => {
							setVested({ ...isVested, withoutVesting: true });
							createCampaign();
						}}
					>
						NON-VESTED CAMPAIGN
					</Button>
				</div>
			)}
		</div>
	);
};

export default Campaign;
