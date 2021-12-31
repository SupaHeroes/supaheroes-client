import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.less';
import Explore from './pages/Explore';
import Grants from './pages/Grants';
import Error from './pages/Error';
import HeaderContainer from './components/HeaderContainer';
import Campaign from './pages/Campaign';

function App() {
	return (
		<div className=' App box-border  font-cormorant'>
			<Layout>
				<HeaderContainer />

				<Routes>
					<Route path='/' element={<Explore />} />
					<Route path='/grants' element={<Grants />} />
					<Route path='/campaign' element={<Campaign />} />
					<Route path='/*' element={<Error />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
