import React from 'react';
import { Button } from 'antd';
import { MessageOutlined, RightOutlined } from '@ant-design/icons';

const ProjectButton = ({ title, link }) => {
	return (
		<a
			icon={<MessageOutlined />}
			style={{
				backgroundColor: '#DEFFEE',
				color: '#101225',
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: '600',
				fontSize: '12px',
				lineHeight: '10px',
				padding: '10px',
				borderRadius: '50px',
				display: 'flex',
				alignItems: 'center',
				margin: '0 10px',
			}}
			href={link}
		>
			{title}
			<RightOutlined />
		</a>
	);
};

export default ProjectButton;
