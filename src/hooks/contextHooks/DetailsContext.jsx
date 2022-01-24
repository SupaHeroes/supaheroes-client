import React, { useContext, useState } from 'react';

const DetailsContext = React.createContext();

export function useDetails() {
	return useContext(DetailsContext);
}

export function DetailsProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);

	const [openedProject, setOpenedProject] = useState();

	const [tiers, setTiers] = useState([
		{
			title: '',
			description: '',
			price: '',
		},
	]);

	const [vestings, setVesting] = useState([
		{
			Date: '',
			amount: '',
		},
	]);

	const [metadata, setMetadata] = useState({
		title: '',
		description: '',
		images: [],
		website: '',
		whitepaper: '',
		socials: {
			twitter: '',
			discord: '',
		},
		currency: '',
		tiers: [
			{
				title: '',
				description: '',
				price: '',
			},
		],
	});

	const [details, setDetails] = useState({
		about: '',
		startDate: '',
		endDate: '',
		fundingTarget: '',
	});

	const [cloneAddress, setCloneAddress] = useState({
		NewCampaignAddress: '',
		creator: '',
		RewardMaster: '',
		vestingMaster: '',
	});

	return (
		<DetailsContext.Provider
			value={{
				metadata,
				setMetadata,
				details,
				setDetails,
				cloneAddress,
				setCloneAddress,
				isLoading,
				setIsLoading,
				tiers,
				setTiers,
				vestings,
				setVesting,
				openedProject, 
				setOpenedProject
			}}
		>
			{children}
		</DetailsContext.Provider>
	);
}
