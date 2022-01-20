import React from 'react';
import { Steps, Button, message } from 'antd';
import ProjectDetailsForm from './ProjectDetailsForm';
import RewardSettingsForm from './RewardSettingsForm';
import ProjectDescription from './ProjectDescription';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';

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

const VestedForm = () => {
	const { metadata, setMetadata, details, setDetails } = useDetails();

	const [current, setCurrent] = React.useState(0);
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
						{current === 0 && (
							<ProjectDescription details={details} setDetails={setDetails} />
						)}
						{current === 1 && (
							<ProjectDetailsForm
								metadata={metadata}
								setMetadata={setMetadata}
								details={details}
								setDetails={setDetails}
							/>
						)}
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

export default VestedForm;
