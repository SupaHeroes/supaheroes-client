import React from 'react';
import { Button } from 'antd';
import { MessageOutlined, RightOutlined } from '@ant-design/icons';

const ProjectButton = ({ title }) => {
	return (
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
			{title}
			<RightOutlined />
		</Button>
	);
};

export default ProjectButton;
