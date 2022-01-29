import React, { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import axios from 'axios';
import { notification } from 'antd';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';
import { useParams } from 'react-router-dom';
import rewardABI from '../../abi/RewardManager.json';

const Story = () => {
	const params = useParams();
	const { Moralis, isInitialized } = useMoralis();

	const [newMetadata, setNewMetadata] = useState();
	const [isLoading, setLoading] = useState(false);
	const [responses, setResponses] = useState({});
	const [selectedFund, setSelectedFund] = useState();

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

	const optionsReward = {
		contractAddress: params.campaignId,
		functionName: 'pledgeForReward',
		abi: rewardABI,
		params: {
			amount: newMetadata?.tiers[selectedFund]?.price,
			id: selectedFund,
			token: newMetadata?.currency,
		},
	};

	const pledgeForReward = async () => {
		const tx = await Moralis.executeFunction({
			awaitReceipt: false,
			...optionsReward,
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

	useEffect(() => {
		if (isInitialized) {
			setLoading(true);
			getMetadata();

			setLoading(false);
		}
		console.log('newMetadata', newMetadata);
	}, [isInitialized, isLoading]);

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
			<h1 className='text-supagreen-dark'>Story</h1>
			<div className='flex justify-between items-start'>
				<p className='font-cormorant text-lg p-6 mr-16'>
					{newMetadata?.details?.about}
				</p>
				<div className='bg-supadark-medium rounded-2xl'>
					{newMetadata?.tiers?.map((tier, index) => (
						<div key={index} className='mx-5 p-6 '>
							<div className='flex  justify-between items-center'>
								<div className='mr-7'>
									<h1 className='text-2xl text-white font-cormorant font-bold'>
										{tier.title}
									</h1>
									<p className='text-sm font-cormorant font-semibold '>{`${
										tier.price
									} ${checkCurrency(newMetadata?.currency)}`}</p>
								</div>
								<button
									onClick={async () => {
										setSelectedFund(index);
										await pledgeForReward();
									}}
									className='bg-supagreen text-supadark-dark font-cormorant text-2xl  px-3 py-2 rounded-xl items-center'
								>
									Fund
								</button>
							</div>
							<p className='text-sm font-cormorant mt-5 '>{tier.description}</p>

							<div className='w-4/5 h-1 mt-12 bg-white'></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Story;
