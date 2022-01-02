import React from 'react';
import { Outlet } from 'react-router-dom';

const Project = () => {
	return (
		<div>
			Project
			<Outlet />
		</div>
	);
};

export default Project;
