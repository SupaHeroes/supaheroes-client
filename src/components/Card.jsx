import React, { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';

import { useNavigate } from 'react-router-dom';
import { Progress } from 'antd';
import { MdOutlineTimer } from 'react-icons/md';
import { BsBookFill } from 'react-icons/bs';
import tokenABI from '../abi/Token.json';

const Card = ({ date, title, shortdesc, image, address, currency, target }) => {
	const navigate = useNavigate();
	const { Moralis, isInitialized } = useMoralis();

	const [balance, setBalance] = useState(0);

	async function getBalance(currency) {
		const res = await Moralis.executeFunction({
			contractAddress: currency,
			functionName: 'balanceOf',
			abi: tokenABI,
			params: {
				account: address,
			},
		});
		console.log('reward::::', res);
		setBalance(res);
		return res;
	}

	function timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes();
		var sec = a.getSeconds();
		var time = date + ' ' + month + ' ' + year;
		return time;
	}

	const checkCurrency = (currency) => {
		if (currency === '0x51203d73c94273C495F5d515dE87795649c21D53') {
			return 'QiUSDC';
		} else if (currency === '0x45ea5d57BA80B5e3b0Ed502e9a08d568c96278F9') {
			return 'USDC';
		} else if (currency === '0x0eaC97A78a93B75549D49145dF41DbE9CD520874') {
			return 'YRT';
		} else if (currency === '0x39A7feB2cB226c632731346e74BF8D33DF44cAA2') {
			return 'SUPA';
		} else {
			return 'N/A';
		}
	};

	useEffect(() => {
		if(isInitialized) {
			getBalance(currency);
		}
	}, [isInitialized]);

	return (
		<div className=' bg-supadark font-sans h-auto rounded-lg border border-supadark-medium'>
			<img
				src={image}
				alt='project'
				className='w-full rounded-t-lg h-72 overflow-clip'
			/>

			<div className='mx-9'>
				<div className='flex justify-between  items-center mt-6 '>
					<p className='text-white font-bold font-inter text-xl uppercase'>
						{parseFloat(Moralis.Units.FromWei(balance)).toFixed(0)} {checkCurrency(currency)}
					</p>

					<p className='text-white font-bold font-inter text-xl uppercase'>
						{target} {checkCurrency(currency)}
					</p>
				</div>
				<Progress
					percent={(Moralis.Units.FromWei(balance) / target) * 100}
					strokeWidth={8}
					strokeColor={{
						'0%': '#79D38A',
						'100%': '#269BA8',
					}}
					showInfo={false}
				/>
			</div>

			<div className='mx-7 pb-3'>
				<div className='flex justify-between items-center'>
					<h3 className='text-white font-inter tracking-wide font-bold text-xl p-3 break-all'>
						{title}
					</h3>
					<p className='flex items-center  text-white text-lg'>
						<MdOutlineTimer className='mr-2' /> {timeConverter(date)}
					</p>
				</div>

				<p className=' text-gray-300 font-inter text-lg px-3 break-words'>
					{shortdesc.slice(0, 60) + (shortdesc.length > 60 ? "..." : "")}
				</p>
			</div>

			<div
				onClick={() => {
					navigate(`/project/${address}`);
				}}
				className='flex mx-9 rounded-md mb-6 justify-center items-center text-white bg-supadark-medium hover:bg-supagreen-dark text-lg cursor-pointer'
			>
				<BsBookFill />
				<p className='pt-4 pl-3'>Read More</p>
			</div>
		</div>
	);
};

export default Card;
