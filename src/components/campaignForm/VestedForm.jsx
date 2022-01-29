import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';
import { Steps, Button, message, notification } from 'antd';
import RewardSettingsForm from './RewardSettingsForm';
import ProjectDescription from './ProjectDescription';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';
import TierDetails from './TierDetails';
import rewardABI from '../../abi/RewardManager.json';
import campaignABI from '../../abi/StandardCampaignStrategy.json';
import vestingABI from '../../abi/VestingManager.json';

const { Step } = Steps;

const steps = [
	{
		title: 1,
		content: 'Project Details',
	},
	{
		title: 2,
		content: 'Tier Details',
	},
	{
		title: 3,
		content: 'Vesting Reward Settings',
	},
	{
		title: 4,
		content: 'Final Review',
	},
];

const VestedForm = () => {
	const { Moralis } = useMoralis();
	const {
		metadata,
		details,
		setDetails,
		tiers,
		cloneAddress,
		vestings,
		metadataUrl,
		setMetadataUrl,
		currentChain,
	} = useDetails();
	const [responses, setResponses] = useState({});

	const [current, setCurrent] = React.useState(0);

	const openNotification = ({ message, description }) => {
		notification.open({
			placement: 'bottomRight',
			message,
			description,
		});
	};
	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	const optionsCampaign = {
		contractAddress: cloneAddress.NewCampaignAddress,
		functionName: 'initialize',
		abi: campaignABI,
		params: {
			_currency: metadata.currency,
			_metadata: `${async () => await metadataIPFS()}`,
			_fundingEndTime: details.endDate,
			_fundTarget: details.fundingTarget,
			_fundingStartTime: details.startDate,
			_vestingManager: '0x0000000000000000000000000000000000000000',
			_rewardManager: `${cloneAddress.RewardMaster}`,
		},
	};

	const initializeCampaign = async () => {
		const tx = await Moralis.executeFunction({
			awaitReceipt: false,
			...optionsCampaign,
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

	const newQuantities = tiers.map((tier) => tier.quantities);
	const newTiers = tiers.map((tier) => tier.price);

	const optionsReward = {
		contractAddress: cloneAddress.RewardMaster,
		functionName: 'initialize',
		abi: rewardABI,
		params: {
			_campaign: `${cloneAddress.NewCampaignAddress}`,
			_uri: `ipfs://QmNbqLeV9cZrBhhkFyESD5sWXhGfPfaPQUT4LfmXz6VETQ/`,
			quantities: newQuantities,
			tiers: newTiers,
			_cc: `0xD26f0f4b312F33A3D5f378e71f74fE22d4B7b6bf`,
		},
	};

	// ipfs://QmNbqLeV9cZrBhhkFyESD5sWXhGfPfaPQUT4LfmXz6VETQ/{id}.json

	const initializeReward = async () => {
		console.log(newQuantities, newTiers);
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

	const newDates = vestings.map((vesting) => {
		const unixDate = parseInt(
			(new Date(vesting.date).getTime() / 1000).toFixed(0)
		);
		return unixDate;
	});

	const newAmount = vestings.map((vesting) => vesting.amount);

	const optionsVesting = {
		contractAddress: cloneAddress.vestingMaster,
		functionName: 'initialize',
		abi: vestingABI,
		params: {
			_dates: newDates,
			_amounts: newAmount,
			_campaign: `${cloneAddress.NewCampaignAddress}`,
		},
	};

	const initializeVestings = async () => {
		console.log(newDates, newAmount);
		console.log(optionsVesting);
		const tx = await Moralis.executeFunction({
			awaitReceipt: false,
			...optionsVesting,
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

	const metadataIPFS = async () => {
		const file = new Moralis.File('file.json', {
			base64: btoa(JSON.stringify(metadata)),
		});
		await file.saveIPFS();
		setMetadataUrl(file.ipfs());
		return file.ipfs();
	};

	const submitCampaign = async () => {
		await initializeCampaign()
			.then(async () => {
				const Campaigns = Moralis.Object.extend('campaigns');
				const campaigns = new Campaigns();
				const newMetadata = await metadataIPFS();

				campaigns
					.save({
						name: metadata.title,
						desc: metadata.description,
						endDate: details.endDate,
						address: cloneAddress.NewCampaignAddress,
						chainId: currentChain,
						fundingTarget: details.fundingTarget,
						currency: metadata.currency,
						thumbnail: metadata.images[0].data_url,
						metadata: newMetadata,
					})
					.then(
						(campaigns) => {
							// Execute any logic that should take place after the object is saved.
							// alert('New object created with objectId: ' + campaign.id);
						},
						(error) => {
							// Execute any logic that should take place if the save fails.
							// error is a Moralis.Error with an error code and message.
							alert(
								'Failed to create new object, with error code: ' + error.message
							);
						}
					);
			})
			.catch((err) => {
				console.log(err);
			});
		await initializeReward();
		await initializeVestings();
	};

	return (
		<div className='flex justify-center bg-supadark-dark  mt-20'>
			<div className=' w-4/5 mt-32 p-8 flex flex-col items-center'>
				<Steps style={{ width: '600px' }} current={current}>
					{steps.map((item) => (
						<Step key={item.title} />
					))}
				</Steps>
				<div className='w-full mt-8'>
					{/* <div className='steps-content'>{steps[current].content}</div> */}

					<div className='bg-supadark-light p-12 rounded-xl'>
						<div className='flex justify-start items-baseline'>
							<div className='bg-supadark-dark border-2 border-supagreen-dark h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>
								{steps[current].title}
							</div>

							<h1 className='ml-8 text-2xl text-slate-100 font-bold'>
								{steps[current].content}
							</h1>
						</div>
						{current === 0 && (
							<ProjectDescription details={details} setDetails={setDetails} />
						)}

						{current === 1 && <TierDetails />}
						{current === 2 && <RewardSettingsForm />}
					</div>

					<div className='steps-action w-full  flex justify-end items-center p-5'>
						{current > 0 && (
							<Button
								style={{
									backgroundColor: '#24E795',
									borderColor: '#001529',
									margin: '0 8px',
									color: '#1F1F1F',
								}}
								onClick={() => prev()}
							>
								Previous
							</Button>
						)}
						{current < steps.length - 1 && (
							<Button
								type='primary'
								style={{
									backgroundColor: '#24E795',
									borderColor: '#001529',
									color: '#1F1F1F',
								}}
								onClick={() => {
									next();
								}}
							>
								Next
							</Button>
						)}
						{current === steps.length - 1 && (
							<Button
								type='primary'
								style={{
									backgroundColor: '#24E795',
									borderColor: '#001529',
									color: '#1F1F1F',
								}}
								onClick={() => {
									message.success('Processing complete!');
									submitCampaign();
								}}
							>
								Submit
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VestedForm;
