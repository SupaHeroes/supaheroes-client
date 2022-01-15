import { Layout, Row, Col } from 'antd';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

const { Content } = Layout;

const Explore = () => {
	return (
		<div className='mt-20'>
			<Layout>
				<Sidebar />

				<Content>
					<div className=' card-container  ml-80 pl-16  p-8  justify-center items-center  bg-supadark-dark  '>
						<Row gutter={[32, 32]}>
							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 12 }}
								xl={{ span: 8 }}
							>
								<Card />
							</Col>
							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 12 }}
								xl={{ span: 8 }}
							>
								<Card />
							</Col>

							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 12 }}
								xl={{ span: 8 }}
							>
								<Card />
							</Col>

							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 12 }}
								xl={{ span: 8 }}
							>
								<Card />
							</Col>

							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 12 }}
								xl={{ span: 8 }}
							>
								<Card />
							</Col>

							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 12 }}
								xl={{ span: 8 }}
							>
								<Card />
							</Col>

							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 12 }}
								xl={{ span: 8 }}
							>
								<Card />
							</Col>

							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 12 }}
								xl={{ span: 8 }}
							>
								<Card />
							</Col>

							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 12 }}
								xl={{ span: 8 }}
							>
								<Card />
							</Col>
						</Row>
					</div>
				</Content>
			</Layout>
		</div>
	);
};

export default Explore;
