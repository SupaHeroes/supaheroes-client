import React from 'react';
import { useParams } from 'react-router-dom';
import ERC20Balance from '../moralis/ERC20Balance';
import ERC20Transfers from '../moralis/ERC20Transfers';

const Transaction = () => {
	const params = useParams();
	return (
		<div>
			<ERC20Transfers address={params.campaignId} />{' '}
			<ERC20Balance address={params.campaignId} />
		</div>
	);
};

export default Transaction;
