import React from 'react';

const Certificate = () => {
	const dispute = async (index) => {
		// const tx = await Moralis.executeFunction({
		// 	awaitReceipt: false,
		// 	contractAddress: newMetadata?.currency,
		// 	functionName: 'approve',
		// 	abi: tokenABI,
		// 	params: {
		// 		spender: params?.campaignId,
		// 		amount: Moralis.Units.Token(newMetadata?.tiers[index]?.price, '18'),
		// 	},
		// });
		// console.log(tx);
		// tx.on('transactionHash', (hash) => {
		// 	setResponses({ ...responses, name: { result: null, isLoading: true } });
		// 	openNotification({
		// 		message: '🔊 New Transaction',
		// 		description: `${hash}`,
		// 	});
		// 	console.log('🔊 New Transaction', hash);
		// });
		// tx.on('receipt', (receipt) => {
		// 	console.log(receipt);
		// });
	};

	return (
		<div>
			<div className='h-60 text-3xl '>
				<button className='text-supagreen-dark' onClick={dispute}></button>
			</div>
		</div>
	);
};

export default Certificate;
