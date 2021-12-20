import { Routes, Route } from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore';
import Grants from './pages/Grants';
import Error from './pages/Error';
import Header from './components/Header';
import Campaign from './pages/Campaign';

function App() {
	return (
		<div className='box-border h-screen bg-supadark font-cormorant'>
			<Header />

			<Routes>
				<Route path='/' element={<Explore />} />
				<Route path='/grants' element={<Grants />} />
				<Route path='/campaign' element={<Campaign />} />
				<Route path='/*' element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
