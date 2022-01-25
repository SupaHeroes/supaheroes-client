import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Breadcrumb, Progress, Menu, Space } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { MdOutlineTimer } from 'react-icons/md';
import dummy from '../abi/dummyMetadata.json';
import ProjectButton from '../components/projects/ProjectButton';
import { useDetails } from '../hooks/contextHooks/DetailsContext';

const Project = () => {
	// const [loading, setLoading] = useState(true);
	const { openedProject, setOpenedProject } = useDetails();
	useEffect(() => {
		setOpenedProject(dummy);
		console.log(openedProject);
		// setLoading = false;
	}, []);

	return (
		<div className='mt-20 bg-supadark-black'>
			<div className=' flex justify-center text-3xl  '>
				<div className='w-4/6 mt-8 '>
					<Breadcrumb className='' separator='>'>
						<Breadcrumb.Item>
							<Link className='' to='/'>
								Explore
							</Link>
						</Breadcrumb.Item>

						<Breadcrumb.Item>{openedProject.title}</Breadcrumb.Item>
					</Breadcrumb>
					<div className='flex flex-col lg:flex-row  '>
						<div className='lg:w-10/12'>
							<img
								className='  h-auto object-cover rounded-[6%] pt-4'
								src={openedProject.images[0]}
								alt='project display'
							/>
							<div className='flex pt-4'>
								<img
									className='w-16 flex-1 h-auto object-cover rounded-[15%]  pr-4'
									src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
									alt='project display'
								/>
								<img
									className='w-16 flex-1  h-auto object-cover rounded-[15%] pr-4'
									src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
									alt='project display'
								/>
								<img
									className='w-16 flex-1  h-auto object-cover rounded-[15%]  pr-4'
									src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
									alt='project display'
								/>
								<img
									className='w-16 flex-1  h-auto object-cover rounded-[15%]'
									src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
									alt='project display'
								/>
							</div>
						</div>

						<div className='flex flex-col justify-between w-full'>
							<div className='p-8'>
								<h1 className='text-white font-cormorant font-bold uppercase text-5xl'>
									{openedProject.title}
								</h1>

								<div className='flex flex-wrap justify-start items-center'>
									<Space>
										<ProjectButton title={'Website'} />
										<ProjectButton title={'Whitepaper'} />
										<ProjectButton title={'Smart Contract'} />
									</Space>
								</div>

								<div className='mt-8 w-full'>
									<p className='flex items-center -mb-1 text-white font-bold text-xl '>
										{' '}
										<MdOutlineTimer className='mr-2 ' /> 5d 20h left
									</p>
									<Progress
										percent={70}
										size='large'
										strokeWidth='10px'
										strokeColor={{
											'0%': '#79D38A',
											'100%': '#269BA8',
										}}
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

							<div className='flex flex-col justify-center bg-supadark border border-supagreen-dark w-11/12 text-white items-start pl-16 py-5  mx-8'>
								<h3 className='flex justify-center items-center text-white text-lg h-auto'>
									{' '}
									<SafetyCertificateOutlined className='mr-3' /> This campaign
									is vested
								</h3>
								<a
									href='https://supaheroes.fund'
									className=' font-inter text-sm text-supadark-light underline'
								>
									Learn more about vested campaign
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex justify-center mt-12'>
				<div className='  w-4/6 '>
					<Menu
						mode='inline'
						defaultSelectedKeys={['1']}
						theme='dark'
						style={{
							backgroundColor: 'transparent',
							textDecoration: 'none',
							fontSize: '18px',
							border: 'none',
							display: 'flex',
						}}
						// className='w-full'
					>
						<Menu.Item key='1'>
							<Link to='' className='font-inter'>
								Story
							</Link>
						</Menu.Item>
						<Menu.Item key='2'>
							<Link to='transaction' className='font-inter'>
								Transaction
							</Link>
						</Menu.Item>
						<Menu.Item key='3'>
							<Link to='certificate' className='font-inter'>
								Get Certificate
							</Link>
						</Menu.Item>
						<Menu.Item key='4' className=''>
							<Link to='vesting' className='font-inter'>
								Vesting Term
							</Link>
						</Menu.Item>
						<Menu.Item key='5' className=''>
							<Link to='contract' className='font-inter'>
								Marketplace
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
