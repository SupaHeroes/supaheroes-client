import { Layout, Row, Col, Input, Skeleton } from 'antd';
import Card from '../components/Card';
import { useMoralis } from 'react-moralis';
import { SearchOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { useState, useEffect } from 'react';

const { Content } = Layout;

const Explore = () => {
	const { Moralis, isInitialized } = useMoralis();
	const obj = Moralis.Object.extend('campaigns');
	const [isLoading, setLoading] = useState(true);
	const [network, setNetwork] = useState('Fuji Testnet');
	const [campaignList, setCampaignList] = useState([]);
	const [category, setCategory] = useState('Categories');

	useEffect(() => {
		if (isInitialized) {
			console.log('is init?' + isInitialized);
			getCampaign('0xa869')
				.then((e) => {
					setCampaignList(e.reverse());
					console.log(e);
				})
				.catch((error) => console.log(error));
		}
	}, [isInitialized]);

	const getCampaign = async (chain) => {
		console.log('calling function');
		setLoading(true);
		const query = new Moralis.Query(obj);
		const res = await query.equalTo('chainId', chain).limit(18).find();
		setLoading(false);
		console.log(res);
		return res;
	};

	const categories = [
		'Creative',
		'Charity',
		'Education',
		'Technology',
		'Others',
	];
	const networks = [
		{ chain: '43113', name: 'Fuji Testnet' },
		{ chain: '43114', name: 'Avalanche' },
	];

	const handleCategoryClick = (choose) => {
		console.log(choose.key);
		setCategory(categories[choose.key]);
	};

	const handleNetworkChange = (choose) => {
		console.log(choose.key);
		setNetwork(networks[choose.key].name);
	};

	const menu = (
		<Menu onClick={handleCategoryClick}>
			{categories.map((item, i) => (
				<Menu.Item key={i}>
					<div className=' text-md cursor-pointer hover:text-supagreen-dark'>
						{item}
					</div>
				</Menu.Item>
			))}
		</Menu>
	);

	const chainMenu = (
		<Menu onClick={handleNetworkChange}>
			{networks.map((item, i) => (
				<Menu.Item key={i}>
					<div className=' text-md cursor-pointer hover:text-supagreen-dark'>
						{item.name}
					</div>
				</Menu.Item>
			))}
		</Menu>
	);

	return (
		<div>
			<Layout>
				<Content style={{ background: '#0D1016' }}>
					<div
						style={{ maxWidth: '70%' }}
						className='pt-32 mx-auto justify-center items-center'
					>
						<div
							style={{
								backgroundImage:
									'url(https://ik.imagekit.io/1irdz9lsyrw/plutusrender__3wykITPm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1638359431895)',
								backgroundSize: 'cover',
								backgroundPositionY: -45,
							}}
							className='rounded-lg w-full flex flex-col text-center  mb-10 items-center justify-center h-64 border border-supagreen-dark'
						>
							<h1 className='text-white uppercase font-bold text-5xl font-cormorant'>
								Spread Wealth
							</h1>
							<h1 className='text-gray-300 text-lg font-inter tracking-wider uppercase font-light'>
								fund our superheroes
							</h1>
						</div>
						<Row gutter={16} className='mb-8'>
							<Col className='gutter-row' span={3}>
								<Dropdown overlay={menu} trigger={['click']}>
									<div className='text-center rounded-md py-2 cursor-pointer bg-supadark border hover:bg-supagreen-dark border-supadark-medium'>
										{category}
									</div>
								</Dropdown>
							</Col>

							<Col className='gutter-row' span={3}>
								<Dropdown overlay={chainMenu} trigger={['click']}>
									<div className='text-center rounded-md py-2 cursor-pointer bg-supadark border hover:bg-supagreen-dark border-supadark-medium'>
										{network}
									</div>
								</Dropdown>
							</Col>

							<Col className='gutter-row' span={10}></Col>
							<Col className='gutter-row' span={8}>
								<Input
									prefix={<SearchOutlined />}
									placeholder='Search campaign'
									style={{
										padding: '8px',
										backgroundColor: '#0D1016',
										borderColor: '#2F353F',
										borderRadius: 3,
									}}
								/>
							</Col>
						</Row>
						<Row gutter={[32, 32]}>
							{isLoading ? (
								<Col
									sm={{ span: 24 }}
									md={{ span: 12 }}
									lg={{ span: 12 }}
									xl={{ span: 8 }}
								>
									<Skeleton.Button
										style={{ height: '600px', borderRadius: '6px' }}
										block={true}
										active={true}
									/>
								</Col>
							) : (
								campaignList.map((e, i) => (
									<Col
										key={i}
										sm={{ span: 24 }}
										md={{ span: 12 }}
										lg={{ span: 12 }}
										xl={{ span: 8 }}
									>
										<Card
											key={i}
											image={e.get('thumbnail')}
											date={e.get('endDate')}
											title={e.get('name')}
											shortdesc={e.get('desc')}
											address={e.get('address')}
											currency={e.get('currency')}
											target={e.get('fundingTarget')}
										/>
									</Col>
								))
							)}
						</Row>
					</div>
				</Content>
			</Layout>
		</div>
	);
};

export default Explore;
