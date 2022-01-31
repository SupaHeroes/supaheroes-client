import React, { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import axios from 'axios';
import { notification } from 'antd';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';
import { useParams } from 'react-router-dom';
import rewardABI from '../../abi/RewardManager.json';
import tokenABI from '../../abi/Token.json';

const Story = () => {
	let id;
	const params = useParams();
	const { Moralis, isInitialized } = useMoralis();

	const [newMetadata, setNewMetadata] = useState();
	const [isLoading, setLoading] = useState(false);
	const [isSelected, setSelected] = useState();
	const [responses, setResponses] = useState({});
	const [selectedFund, setSelectedFund] = useState(0);
	const [newAddresses, setNewAddresses] = useState();

	useEffect(() => {
		if (isInitialized) {
			setLoading(true);
			getMetadata();
			setLoading(false);
		}
		// console.log('newMetadata', newMetadata);
	}, [isInitialized, selectedFund]);

	const getAddresses = async () => {
		setLoading(true);
		const project = Moralis.Object.extend('campaigns');
		const query = new Moralis.Query(project);
		query.equalTo('address', `${params.campaignId}`);
		const results = await query.find();
		const newIPFS = results[0].get('NewCampaignAddress');
		setLoading(false);
		return newIPFS;
	};

	const getProjectIPFS = async () => {
		setLoading(true);
		const project = Moralis.Object.extend('campaigns');
		const query = new Moralis.Query(project);
		query.equalTo('address', `${params.campaignId}`);
		const results = await query.find();
		const newIPFS = results[0].get('metadata');
		setLoading(false);
		return newIPFS;
	};

	const getMetadata = async () => {
		try {
			setLoading(true);
			const ipfs = await getProjectIPFS();
			const response = await axios.get(ipfs);
			await setNewMetadata(response.data);
			setNewAddresses(await getAddresses());

			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	const openNotification = ({ message, description }) => {
		notification.open({
			placement: 'bottomRight',
			message,
			description,
		});
	};

	const pledgeForReward = async (index) => {
		const tx = await Moralis.executeFunction({
			awaitReceipt: false,
			contractAddress: newAddresses?.RewardMaster,
			functionName: 'pledgeForReward',
			abi: rewardABI,
			params: {
				amount: Moralis.Units.Token(newMetadata?.tiers[index]?.price, '18'),
				id: index,
				token: newMetadata?.currency,
			},
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
			console.log(receipt);
		});
	};

	const approve = async (index) => {
		const tx = await Moralis.executeFunction({
			awaitReceipt: false,
			contractAddress: newMetadata?.currency,
			functionName: 'approve',
			abi: tokenABI,
			params: {
				spender: params?.campaignId,
				amount: Moralis.Units.Token(newMetadata?.tiers[index]?.price, '18'),
			},
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
			console.log(receipt);
		});
	};

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
	return (
		<div className='h-60 text-3xl '>
			<h1 className='text-supagreen-dark font-cormorant'>Story</h1>
			<div className='flex justify-between items-start'>
				<p className='font-inter text-lg p-6 mr-16'>
					{newMetadata?.details?.about}
				</p>
				<div className='flex flex-col justify-center items-center'>
					<div className='bg-supadark mb-8 border border-supagreen-dark px-6'>
						{newMetadata?.tiers?.map((tier, index) => (
							<div key={index} className='mx-5 p-6 border-b border-supagreen-dark'>
								<div className='flex  justify-between items-center'>
									<div className='mr-7'>
										<h1 className='text-2xl text-white font-cormorant font-bold'>
											{tier.title}
										</h1>
										<p className='text-sm font-cormorant font-semibold '>{`${
											tier.price
										} ${checkCurrency(newMetadata?.currency)}`}</p>
									</div>
									<div className='flex flex-col justify-end '>
										<button
											onClick={async () => {
												setSelected(index);
												await approve(index);
											}}
											className='px-3 py-2 text-xl border border-supagreen-dark hover:bg-supagreen-dark font-inter my-4'
										>
											Approve
										</button>
										{isSelected === index && (
											<button
												disabled={isSelected !== index}
												onClick={async () => {
													await pledgeForReward(index);
												}}
												className='font-inter text-xl  px-3 py-2 border border-supagreen-dark items-center hover:bg-supagreen-dark'
											>
												Fund
											</button>
										)}
									</div>
								</div>
								<p className='text-sm font-inter mt-5 '>
									{tier.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Story;
