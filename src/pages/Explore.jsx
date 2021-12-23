import { Layout } from 'antd';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

const { Content } = Layout;

const Explore = () => {
	return (
		<Layout>
			<Sidebar />

			<Content>
				<div className='flex justify-center items-center flex-wrap bg-supadark-dark h-screen overflow-y-auto'>
					<Card />
					<Card />
					<Card />
				</div>
			</Content>
		</Layout>
	);
};

export default Explore;
