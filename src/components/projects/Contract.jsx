import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';
import { useMoralis } from 'react-moralis';
import campaignABI from '../../abi/StandardCampaignStrategy.json';
import axios from 'axios';
import { useVerifyMetadata } from '../../hooks/useVerifyMetadata';

const Contract = () => {
	const { account, Moralis, isInitialized, chainId } = useMoralis();
	const { verifyMetadata } = useVerifyMetadata();
	const [Nfts, setNfts] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const params = useParams();

	const readOptions = {
		chain: chainId,
		address: params.campaignId,
		function_name: 'rewardManager',
		abi: campaignABI,
	};

	const getRewardManager = async () => {
		const res = await Moralis.Web3API.native.runContractFunction(readOptions);
		// console.log('reward::::', res);
		return res;
	};

	const getTokenAddress = async () => {
		setLoading(true);
		const reward = await getRewardManager();

		const options = { address: account, chain: chainId, token_address:reward };
		const nfts = await Moralis.Web3API.account.getNFTsForContract(options);

		setNfts(nfts.result);
		setLoading(false);
		// console.log('NFTS:::::', Nfts);
	};

	useEffect(() => {
		if (isInitialized) {
			getTokenAddress();
		}
	}, [isInitialized]);

	return (
		<div>
			<h1 className="text-white font-cormorant mb-8 font-bold text-lg">YOUR RECEIPT NFTs</h1>
		<div className='flex flex-wrap mb-10'>
			
			{isLoading ? (
				<Skeleton></Skeleton>
			) : (
				Nfts.map((v, i) => {
					const a = verifyMetadata(v);
					console.log('v is ::::', v);
					console.log('a is ::::', a);
					return (
						<div className='mr-3 border border-supagreen-dark cursor-pointer' key={i}>
							<video
								className='p-4'
								width='320'
								height='320'
								loop
								autoPlay
							>
								<source src={a.image} type='video/mp4' />
							</video>
							<h1 className='text-white text-center pt-3'>{v?.metadata?.name}</h1>
							<button className="bg-supagreen-dark w-full mt-3 mx-auto py-2">Sell</button>
						</div>
					);
				})
			)}
		</div>
		</div>
	);
};

export default Contract;
