import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

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
				<Outlet />
			</div>
		</div>
	);
};

export default Project;
