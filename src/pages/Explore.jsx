import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

const Explore = () => {
	return (
		<div className='flex '>
			<Sidebar />

			<div className='flex justify-center items-center flex-wrap bg-supadark-dark h-screen overflow-y-auto'></div>
		</div>
	);
};

export default Explore;
