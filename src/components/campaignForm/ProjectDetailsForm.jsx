import React, { useState } from 'react';
import { DatePicker, Space, Input, Select } from 'antd';

import { useDetails } from '../../hooks/contextHooks/DetailsContext';
import PicturesWall from './ImageUpload';

const { RangePicker } = DatePicker;
const { Option } = Select;

const styles = {
	input: {
		width: '90%',
		outline: 'none',
		height: '44px',
	},
};

const ProjectDetailsForm = () => {
	const { details, setDetails, metadata, setMetadata } = useDetails();

	const calenderHandler = (info) => {
		const startDate = parseInt(
			(new Date(info[0]?._d).getTime() / 1000).toFixed(0)
		);
		const endDate = parseInt(
			(new Date(info[1]?._d).getTime() / 1000).toFixed(0)
		);

		setDetails({ ...details, startDate, endDate });
	};

	return (
		<div className=' mt-6'>
			<form className='grid gap-4 grid-cols-2'>
				<div className='flex flex-col'>
					<h3 className=' text-lg text-supagreen-dark text-slate-100'>Project Name</h3>
					<Input
						style={styles.input}
						title={'Project Name'}
						value={metadata.title}
						onChange={(e) =>
							setMetadata({ ...metadata, title: e.target.value })
						}
					/>
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-lg text-supagreen-dark text-slate-100'>Short Description</h3>
					<Input
						style={styles.input}
						title={'Short Description'}
						value={metadata.description}
						onChange={(e) =>
							setMetadata({ ...metadata, description: e.target.value })
						}
					/>
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-lg text-supagreen-dark text-slate-100'>Funding Period</h3>
					<Space direction='vertical' size={'large'}>
						<RangePicker
							style={styles.input}
							onCalendarChange={(info) => {
								calenderHandler(info);
							}}
						/>
					</Space>
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-lg text-supagreen-dark text-slate-100'>Funding Goal</h3>
					<Input
						style={styles.input}
						title={'Funding Goal'}
						type={'number'}
						value={details.fundingTarget}
						onChange={(e) => {
							setDetails({ ...details, fundingTarget: e.target.value });
						}}
					/>
				</div>
				<div className='flex flex-col'>
					<h3 className=' text-lg text-supagreen-dark text-slate-100'>Select Currency</h3>
					<Input.Group>
						<Select
							size='large'
							style={{
								width: '90%',
								outline: 'none',
								height: '44px',
							}}
							defaultValue='Select Currency'
							value={metadata.currency}
							onChange={(e) => {
								setMetadata({ ...metadata, currency: e });
								console.log(metadata.currency);
							}}
						>
							<Option value='0xdac17f958d2ee523a2206206994597c13d831ec7'>
								USDT
							</Option>
							<Option value='0x4fabb145d64652a948d72533023f6e7a623c7c53'>
								BUSD
							</Option>
							<Option value='0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0'>
								MATIC
							</Option>
						</Select>
					</Input.Group>
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-lg text-supagreen-dark text-slate-100'>Website Link</h3>
					<Input
						style={styles.input}
						title={'Website'}
						type={'url'}
						value={metadata.website}
						onChange={(e) => {
							setMetadata({ ...metadata, website: e.target.value });
						}}
					/>
				</div>
				<div className='flex flex-col'>
					<h3 className=' text-lg text-supagreen-dark text-slate-100'>White Paper Link</h3>
					<Input
						style={styles.input}
						title={'Whitepaper'}
						value={metadata.whitepaper}
						onChange={(e) => {
							setMetadata({ ...metadata, whitepaper: e.target.value });
						}}
					/>
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-lg text-supagreen-dark text-slate-100'>Twitter</h3>
					<Input
						style={styles.input}
						title={'Twitter'}
						value={metadata.socials.twitter}
						onChange={(e) => {
							setMetadata({
								...metadata,
								socials: { ...metadata.socials, twitter: e.target.value },
							});
						}}
					/>
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-lg text-supagreen-dark text-slate-100'>Discord</h3>
					<Input
						style={styles.input}
						title={'Discord'}
						value={metadata.socials.discord}
						onChange={(e) => {
							setMetadata({
								...metadata,
								socials: { ...metadata.socials, discord: e.target.value },
							});
						}}
					/>
				</div>
			</form>
			<div className='mt-8'>
				<PicturesWall />
			</div>
		</div>
	);
};

export default ProjectDetailsForm;
