import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Breadcrumb, Progress, Menu } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { MdOutlineTimer } from 'react-icons/md';
import ProjectButton from '../components/projects/ProjectButton';

const Project = () => {
	return (
		<div className='mt-[80px] bg-supadark-dark'>
			<div className=' flex justify-center text-3xl  '>
				<div className='w-4/5 mt-8 '>
					<Breadcrumb className='' separator='>'>
						<Breadcrumb.Item>
							<Link className='' to='/'>
								Explore
							</Link>
						</Breadcrumb.Item>

						<Breadcrumb.Item>Newton | The crypto Laptop</Breadcrumb.Item>
					</Breadcrumb>
					<div className='flex flex-col lg:flex-row  '>
						<div className='lg:w-8/12 '>
							<img
								className='  h-auto object-cover rounded-[6%] p-4'
								src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
								alt='project display'
							/>
							<div className='flex '>
								<img
									className='w-16 flex-1 h-auto object-cover rounded-[15%]  p-4'
									src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
									alt='project display'
								/>
								<img
									className='w-16 flex-1  h-auto object-cover rounded-[15%] p-4'
									src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
									alt='project display'
								/>
								<img
									className='w-16 flex-1  h-auto object-cover rounded-[15%]  p-4'
									src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
									alt='project display'
								/>
								<img
									className='w-16 flex-1  h-auto object-cover rounded-[15%] p-4'
									src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
									alt='project display'
								/>
							</div>
						</div>

						<div className='flex flex-col justify-between w-full ml-20'>
							<div className='p-8 '>
								<h1 className='text-white font-sans font-bold text-5xl'>
									Newton | The crypto Laptop
								</h1>

								<div className='flex flex-wrap justify-start items-center'>
									<ProjectButton title={'Website'} />
									<ProjectButton title={'Whitepaper'} />
									<ProjectButton title={'Smart Contract'} />
								</div>

								<div className='mt-8 w-9/12'>
									<p className='flex items-center -mb-1 text-white font-bold text-2xl '>
										{' '}
										<MdOutlineTimer className='mr-2 ' /> 5d 20h left
									</p>
									<Progress
										percent={70}
										size='large'
										strokeColor={'#67E9F1'}
										showInfo={false}
									/>
									<div className='flex justify-between  items-center mt-3'>
										<p className='text-white font-bold  text-lg'>
											3 Eth Remaining
										</p>
										<p className='text-white font-bold  text-lg'>
											23 Eth Backed
										</p>
									</div>
								</div>
							</div>

							<div className='flex flex-col justify-center bg-supagreen w-9/12 text-white items-start pl-16 p-2  mx-8'>
								<h3 className='flex justify-center items-center text-white pt-8'>
									{' '}
									<SafetyCertificateOutlined className='mr-3' /> This campaign
									is vested
								</h3>
								<p className='text-base ml-12'>
									Learn more about vested campaign
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex justify-center mt-32'>
				<div className=' bg-supadark-dark w-4/5 '>
					{/* <div className='flex justify-between font-sans font-bold text-2xl'>
						<Link to=''>Story</Link>
						<Link to='transaction'>Transaction</Link>
						<Link to='certificate'>Get Certificate</Link>
						<Link to='vesting'>Vesting Term</Link>
						<Link to='contract'>Trace Contract</Link>
					</div> */}

					<Menu
						mode='horizontal'
						defaultSelectedKeys={['1']}
						style={{
							background: '#1B1C1E',
							textDecoration: 'none',
							border: 'none',
							display: 'flex',
							justifyContent: 'flex-start',
						}}
						// className='w-full'
					>
						<Menu.Item key='1'>
							<Link to='' className='font-sans font-bold text-2xl'>
								Story
							</Link>
						</Menu.Item>
						<Menu.Item key='2'>
							<Link to='transaction' className='font-sans font-bold text-2xl'>
								Transaction
							</Link>
						</Menu.Item>
						<Menu.Item key='3'>
							<Link to='certificate' className='font-sans font-bold text-2xl'>
								Get Certificate
							</Link>
						</Menu.Item>
						<Menu.Item key='4' className=''>
							<Link to='vesting' className='font-sans font-bold text-2xl'>
								Vesting Term
							</Link>
						</Menu.Item>
						<Menu.Item key='5' className=''>
							<Link to='contract' className='font-sans font-bold text-2xl'>
								Trace Contract
							</Link>
						</Menu.Item>
					</Menu>

					<div className='mt-16'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
