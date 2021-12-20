import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Expore from './pages/Expore';
import Grants from './pages/Grants';
import Error from './pages/Error';
import Header from './components/Header';
import Campaign from './pages/Campaign';

function App() {
	return (
		<div className='box-border h-screen p-4 bg-supadark-light font-cormorant'>
			<Header />

			<Routes>
				<Route path='/' element={<Expore />} />
				<Route path='/grants' element={<Grants />} />
				<Route path='/campaign' element={<Campaign />} />
				<Route path='/*' element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
