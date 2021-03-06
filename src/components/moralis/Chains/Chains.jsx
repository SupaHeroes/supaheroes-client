import { useEffect, useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { AvaxLogo } from './Logos';
import { useChain, useMoralis } from 'react-moralis';
import { useDetails } from '../../../hooks/contextHooks/DetailsContext';

const styles = {
	item: {
		display: 'flex',
		alignItems: 'center',
		height: '42px',
		wight: '60px',
		fontWeight: '500',
		fontFamily: 'Roboto, sans-serif',
		fontSize: '14px',
		padding: '0 10px',
	},
	button: {
		border: '2px solid #79D38A',
		borderRadius: '12px',
	},
};

const menuItems = [
	{
		key: '0xa86a',
		value: 'Avalanche',
		icon: <AvaxLogo />,
	},
	{
		key: '0xa869',
		value: 'Avalanche Testnet',
		icon: <AvaxLogo />,
	},
];

function Chains() {
	const { setChain } = useDetails();
	const { switchNetwork, chainId, chain } = useChain();
	const { isAuthenticated } = useMoralis();
	const [selected, setSelected] = useState({});

	// console.log('chain', chain);

	useEffect(() => {
		if (!chainId) return null;
		const newSelected = menuItems.find((item) => item.key === chainId);
		setSelected(newSelected);
		setChain(chainId);
		console.log('current chainId: ', chainId);
	}, [chainId]);

	const handleMenuClick = (e) => {
		console.log('switch to: ', e.key);
		switchNetwork(e.key);
	};

	const menu = (
		<Menu onClick={handleMenuClick}>
			{menuItems.map((item) => (
				<Menu.Item key={item.key} icon={item.icon} style={styles.item}>
					<span style={{ marginLeft: '5px' }}>{item.value}</span>
				</Menu.Item>
			))}
		</Menu>
	);

	if (!chainId || !isAuthenticated) return null;

	return (
		<div className='mr-3'>
			<Dropdown overlay={menu} trigger={['click']}>
				<Button
					key={selected?.key}
					icon={selected?.icon}
					style={{ ...styles.button, ...styles.item }}
				>
					{!chainId || !isAuthenticated ? (
						<span style={{ marginLeft: '5px' }}>{selected?.value}</span>
					) : (
						<span style={{ marginLeft: '5px' }}>{selected?.value}</span>
					)}
					<DownOutlined />
				</Button>
			</Dropdown>
		</div>
	);
}

export default Chains;
