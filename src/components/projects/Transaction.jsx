import React from 'react';
import { useParams } from 'react-router-dom';

import ERC20Transfers from '../moralis/ERC20Transfers';

const Transaction = () => {
	const params = useParams();
	return (
		<div>
			<ERC20Transfers address={params.campaignId} />{' '}
		</div>
	);
};

export default Transaction;
