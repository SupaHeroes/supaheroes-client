import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Breadcrumb, Button } from 'antd';
import { MessageOutlined, RightOutlined } from '@ant-design/icons';

const Project = () => {
	return (
		<div className='mt-[80px] flex justify-center text-3xl bg-supadark-dark h-screen'>
			<div className='w-4/5 mt-8 '>
				<Breadcrumb className='' separator='>'>
					<Breadcrumb.Item>
						<Link className='' to='/'>
							Explore
						</Link>
					</Breadcrumb.Item>

					<Breadcrumb.Item>Newton | The crypto Laptop</Breadcrumb.Item>
				</Breadcrumb>
				<div className='flex'>
					<img
						className='w-[50%] h-auto object-cover rounded-md p-8'
						src='https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
						alt='project display'
					/>
					<div className='p-8'>
						<h1 className='text-white font-sans font-bold text-5xl'>
							Newton | The crypto Laptop
						</h1>

						<div className='flex justify-start items-center'>
							<Button
								icon={<MessageOutlined />}
								style={{
									backgroundColor: '#DEFFEE',
									color: '#101225',
									fontFamily: 'Inter',
									fontStyle: 'normal',
									fontWeight: '600',
									fontSize: '12px',
									lineHeight: '10px',
									display: 'flex',
									alignItems: 'center',
									marginRight: '14px',
								}}
								shape='round'
							>
								Website
								<RightOutlined />
							</Button>

							<Button
								icon={<MessageOutlined />}
								style={{
									backgroundColor: '#DEFFEE',
									color: '#101225',
									fontFamily: 'Inter',
									fontStyle: 'normal',
									fontWeight: '600',
									fontSize: '12px',
									lineHeight: '10px',
									display: 'flex',
									alignItems: 'center',
									marginRight: '14px',
								}}
								shape='round'
							>
								Whitepaper
								<RightOutlined />
							</Button>

							<Button
								icon={<MessageOutlined />}
								style={{
									backgroundColor: '#DEFFEE',
									color: '#101225',
									fontFamily: 'Inter',
									fontStyle: 'normal',
									fontWeight: '600',
									fontSize: '12px',
									lineHeight: '10px',
									display: 'flex',
									alignItems: 'center',
								}}
								shape='round'
							>
								Smart Contract
								<RightOutlined />
							</Button>
						</div>
					</div>
				</div>

				<Outlet />
			</div>
		</div>
	);
};

export default Project;
