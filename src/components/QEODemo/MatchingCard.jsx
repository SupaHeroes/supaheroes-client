import React from 'react';
import { Col } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Style = {
	paddingLeft: '0',
	color: 'white',
};

const MatchingCard = ({
	contributeBtn,
	inputBtn,
	name,
	goal,
	contribution,
	matching,
}) => {
	return (
		<Col className='gutter-row' span={6}>
			<div className='h-full w-full border border-supagreen-dark rounded-xl'>
				<div className='p-4'>
					<Title style={Style} level={2}>
						{name}
					</Title>
					<div className='flex-col py-3'>
						<Text style={Style}>Goal:</Text>

						{inputBtn}
					</div>

					<div className='flex-col py-3'>
						<Text style={Style}>Contribution:</Text>

						{contributeBtn}
					</div>

					<div className='flex-col'>
						<Text style={Style}>Matched with:</Text>
						<div className='w-full bg-supadark py-3 rounded-md'>
							<h1 className='text-center text-white font-bold'>${matching}</h1>
						</div>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default MatchingCard;
