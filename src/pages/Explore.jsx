import { Layout, Row, Col } from 'antd';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

const { Content } = Layout;

const Explore = () => {
	return (
		<div className=''>
			<Layout>
				<Sidebar />

				<Content>
					<div className=' card-container p-8 justify-center items-center  bg-supadark-dark h-screen overflow-y-scroll'>
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
