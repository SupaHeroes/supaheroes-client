import React from 'react';
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
		setMetadata({ ...metadata, details: details });
	};

	return (
		<div className=' mt-6'>
			<form className='grid gap-4 grid-cols-2'>
				<div className='flex flex-col'>
					<h3 className=' text-2xl text-slate-100'>Project Name</h3>
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
					<h3 className=' text-2xl text-slate-100'>Short Description</h3>
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
					<h3 className=' text-2xl text-slate-100'>Funding Period</h3>
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
					<h3 className=' text-2xl text-slate-100'>Funding Goal</h3>
					<Input
						style={styles.input}
						title={'Funding Goal'}
						type={'number'}
						value={details.fundingTarget}
						onChange={(e) => {
							setDetails({ ...details, fundingTarget: e.target.value });
							setMetadata({ ...metadata, details: details });
						}}
					/>
				</div>
				<div className='flex flex-col'>
					<h3 className=' text-2xl text-slate-100'>Select Currency</h3>
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
							<Option value='0x51203d73c94273C495F5d515dE87795649c21D53'>
								QiUSDC
							</Option>
							<Option value='0x45ea5d57BA80B5e3b0Ed502e9a08d568c96278F9'>
								USDC
							</Option>
							<Option value='0x0eaC97A78a93B75549D49145dF41DbE9CD520874'>
								YRT
							</Option>
						</Select>
					</Input.Group>
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-2xl text-slate-100'>Website Link</h3>
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
					<h3 className=' text-2xl text-slate-100'>White Paper Link</h3>
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
					<h3 className=' text-2xl text-slate-100'>Twitter</h3>
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
					<h3 className=' text-2xl text-slate-100'>Discord</h3>
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
