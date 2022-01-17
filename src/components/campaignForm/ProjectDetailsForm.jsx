import React from 'react';
import { DatePicker, Space, Input, Select } from 'antd';

// import Input from './Form';
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

const ProjectDetailsForm = ({ metadata, setMetadata, details, setDetails }) => {
	return (
		<div className=' mt-6'>
			<form className='grid gap-4 grid-cols-2'>
				<div className='flex flex-col'>
					<h3 className=' text-2xl text-slate-100'>Campaign Symbol</h3>
					<Input style={styles.input} title={'Campaign Symbol'} />
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-2xl text-slate-100'>Project Name</h3>
					<Input style={styles.input} title={'Project Name'} />
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-2xl text-slate-100'>Short Description</h3>
					<Input style={styles.input} title={'Short Description'} />
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-2xl text-slate-100'>Funding Period</h3>
					<Space direction='vertical' size={'large'}>
						<RangePicker style={styles.input} />
					</Space>
				</div>

				<div className='flex flex-col'>
					<h3 className=' text-2xl text-slate-100'>Funding Goal</h3>
					<Input style={styles.input} title={'Funding Goal'} />
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
					<h3 className=' text-2xl text-slate-100'>Website Link</h3>
					<Input style={styles.input} title={'Website'} />
				</div>
				<div className='flex flex-col'>
					<h3 className=' text-2xl text-slate-100'>White Paper Link</h3>
					<Input style={styles.input} title={'Whitepaper'} />
				</div>
			</form>
			<div className='mt-8'>
				<PicturesWall />
			</div>
		</div>
	);
};

export default ProjectDetailsForm;
