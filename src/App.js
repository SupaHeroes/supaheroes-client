import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { useLayoutEffect } from 'react';
import { useMoralis } from 'react-moralis';
import './App.less';
import Explore from './pages/Explore';
import Grants from './pages/Grants';
import Error from './pages/Error';
import HeaderContainer from './components/HeaderContainer';
import Campaign from './pages/Campaign';
import Project from './pages/Project';
import Story from './components/projects/Story';
import Transaction from './components/projects/Transaction';
import Certificate from './components/projects/Certificate';
import Vesting from './components/projects/Vesting';
import Contract from './components/projects/Contract';
import VestedForm from './components/campaignForm/VestedForm';
import NotVestedForm from './components/campaignForm/NotVestedForm';

function App() {
	const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
		useMoralis();

	useLayoutEffect(() => {
		const connectorId = window.localStorage.getItem('connectorId');
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
			enableWeb3({ provider: connectorId });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

	return (
		<div className=' App box-border  font-inter '>
			<Layout>
				<HeaderContainer />

				<Routes>
					<Route path='/' element={<Explore />} />
					<Route path='/:campaignId' element={<Project />}>
						<Route index element={<Story />} />
						<Route path='transaction' element={<Transaction />} />
						<Route path='certificate' element={<Certificate />} />
						<Route path='vesting' element={<Vesting />} />
						<Route path='contract' element={<Contract />} />
					</Route>
					<Route path='/grants' element={<Grants />} />
					<Route path='/campaign' element={<Campaign />} />
					<Route path='/campaign/withvesting' element={<VestedForm />} />
					<Route path='/campaign/withoutvesting' element={<NotVestedForm />} />

					<Route path='/*' element={<Error />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
