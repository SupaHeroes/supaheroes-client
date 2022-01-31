import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Skeleton } from 'antd';
import { useMoralis } from "react-moralis";
import campaignABI from "../../abi/StandardCampaignStrategy.json";
import axios from 'axios';

const Contract = () => {
	const { account, Moralis, isInitialized, chainId } =
    useMoralis();
	const [Nfts, setNfts] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const params = useParams();

	const readOptions = {
		contractAddress: params.campaignId,
		functionName: "rewardManager",
		abi: campaignABI
	  };
	
	  const getRewardManager = async() => {
		const res = await Moralis.executeFunction(readOptions);
		console.log("reward::::", res);
		return res;
	  }

	  const getMetadata = async (ipfs) => {
		try {
			const response = await axios.get(ipfs);
			console.log("ipfsresponse::::", response);
			return response;
			
		} catch (error) {
			console.error(error);
			return null;
		}
	};

	const getTokenAddress = async () => {
		setLoading(true);
		const reward = await getRewardManager();
		
		const options = { address: reward, chain: chainId };
		const nfts = await Moralis.Web3API.token.getNFTOwners(options);

		setNfts(nfts.result);
		setLoading(false);
		console.log("NFTS:::::", Nfts);
	}

	useEffect(() => {
		if (isInitialized) {
			getTokenAddress();
		}
	}, [isInitialized])

	return (
		<div>
			{isLoading ? <Skeleton></Skeleton> : Nfts.map((v, i) => 
				<div key={i}>
					<img src={v.metadata} alt="test" />
					</div>
			)}
		</div>
	);
};

export default Contract;
