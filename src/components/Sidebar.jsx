import React from 'react';
import Checkbox from './Checkbox';
import { BiLinkExternal } from 'react-icons/bi';
import { BsDiscord, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Layout, Input } from 'antd';

const { Sider } = Layout;

const Sidebar = () => {
	return (
		<Sider width='300'>
			<div className='p-4 bg-supadark-light h-screen'>
				<Input.Search allowClear style={{}} placeholder='Search' />

				<div className='mt-5'>
					<h3 className='text-lg font-bold text-supagreen-light'>Chains</h3>
					<Checkbox name={'Avalanche'} value={'Avalanche'} />
					<Checkbox name={'Ploygon'} value={'polygon'} />
				</div>

				<div className='mt-5'>
					<h3 className='text-lg font-bold text-supagreen-light'>Categories</h3>
					<Checkbox name={'Music, Film & Art'} value={'art'} />
					<Checkbox name={'Finance'} value={'finance'} />
					<Checkbox name={'Hardware & IOT'} value={'hardwareIOT'} />
					<Checkbox name={'Books & Publishing'} value={'books'} />
					<Checkbox name={'Internet & Blockchain'} value={'internet'} />
					<Checkbox name={'Charity'} value={'charity'} />
					<Checkbox name={'Software & Apps'} value={'software'} />
				</div>

				<div className='mt-5'>
					<h3 className='text-lg font-bold text-supagreen-light'>Status</h3>
					<Checkbox name={'New'} value={'new'} />
					<Checkbox name={'Ongoing'} value={'ongoing'} />
					<Checkbox name={'Finished'} value={'finished'} />
				</div>

				<div className='h-0.5 w-full my-10 bg-supagreen-light'></div>

				<div className='flex justify-between items-center text-supagreen-light'>
					<h3 className='text-supagreen-light text-base'>How to</h3>
					<BiLinkExternal />
				</div>

				<div className='flex justify-between items-center text-supagreen-light'>
					<h3 className='text-supagreen-light text-base'>Governance</h3>
					<BiLinkExternal />
				</div>

				<div className='flex justify-between items-center text-supagreen-light'>
					<h3 className='text-supagreen-light text-base'>Community</h3>
					<BiLinkExternal />
				</div>

				<div className='flex justify-between items-center text-supagreen-light'>
					<h3 className='text-supagreen-light text-base'>Buy on TraderJoe</h3>
					<BiLinkExternal />
				</div>

				<div className='flex mt-10 justify-start items-center text-2xl text-supagreen-light'>
					<BsDiscord className='mr-6' />
					<BsTwitter className='mr-6' />
					<BsYoutube className='mr-6' />
				</div>
			</div>
		</Sider>
	);
};

export default Sidebar;
