import React, { useContext, useState } from 'react';

const DetailsContext = React.createContext();

export function useDetails() {
	return useContext(DetailsContext);
}

export function DetailsProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);

	const [metadata, setMetadata] = useState({
		title: '',
		description: '',
		images: [],
		whitepaper: '',
		website: '',
		currency: '',
		socials: {
			twitter: '',
			discord: '',
		},
	});

	const [details, setDetails] = useState({
		title: '',
		about: '',
		startDate: '',
		endDate: '',
		fundingTarget: '',
	});

	const [cloneAddress, setCloneAddress] = useState({
		NewCampaignAddress: '',
		creator: '',
		RewardMaster: '',
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
			}}
		>
			{children}
		</DetailsContext.Provider>
	);
}
