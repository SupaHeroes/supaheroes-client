import React from 'react';
import { useMemo, useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { Steps, Button, message } from 'antd';
import ProjectDetailsForm from '../components/campaignForm/ProjectDetailsForm';
import campaignABI from "../abi/StandardCampaignStrategy.json";
import './campaign.css';
import RewardSettingsForm from '../components/campaignForm/RewardSettingsForm';
import ProjectDescription from '../components/campaignForm/ProjectDescription';

const { Step } = Steps;

const steps = [
	{
		title: 1,
		content: 'Project Description',
	},
	{
		title: 2,
		content: 'Project Details',
	},
	{
		title: 3,
		content: 'Reward Settings',
	},
	{
		title: 4,
		content: 'Final Review',
	},
];

const Campaign = () => {
	const [current, setCurrent] = React.useState(0);

	const { Moralis, chainId } = useMoralis();
  	const [responses, setResponses] = useState({});

	  const options = {
		contractAddress: "0xD6930ccCbDdA896DaCCDB80F83f1c131b8b16680",
		functionName: "initialize",
		abi: campaignABI,
		params: {
		_currency: "",
         _metadata: "",
        _fundingEndTime: 1644926338,
        _fundTarget: 2000,
        _fundingStartTime: 1642334338,
        _vestingManager: "0x",
        _rewardManager: "0x6905fec04baA75Fef9fEF71327912586FBFFD931"
		},
	  };

	  const tx = await Moralis.executeFunction({ awaitReceipt: false, ...options });
                tx.on("transactionHash", (hash) => {
                  setResponses({ ...responses, [name]: { result: null, isLoading: true } });
                  openNotification({
                    message: "🔊 New Transaction",
                    description: `${hash}`,
                  });
                  console.log("🔊 New Transaction", hash);
                })

  /**Moralis Live query for displaying contract's events*/
  const { data } = useMoralisQuery("Events", (query) => query, [], {
    live: true,
  });

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
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

					<div className='bg-supadark-light p-12'>
						<div className='flex justify-start items-baseline'>
							<div className='bg-supadark-dark border-2 border-supagreen-dark h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>
								{steps[current].title}
							</div>

							<h1 className='ml-8 text-2xl text-slate-100 font-bold'>
								{steps[current].content}
							</h1>
						</div>
						{current === 0 && <ProjectDescription />}
						{current === 1 && <ProjectDetailsForm />}
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
								onClick={() => next()}
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
								onClick={() => message.success('Processing complete!')}
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

export default Campaign;
