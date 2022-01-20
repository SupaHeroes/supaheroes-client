import React, { useContext, useState } from 'react';

const DetailsContext = React.createContext();

export function useDetails() {
	return useContext(DetailsContext);
}

export function DetailsProvider({ children }) {
	const [metadata, setMetadata] = useState({
		title: '',
		description: '',
		images: [],
		whitepaper: '',
		website: '',
		currency: '',
	});

	const [details, setDetails] = useState({
		title: '',
		about: '',
		startDate: '',
		endDate: '',
		fundingTarget: '',
	});

	return (
		<DetailsContext.Provider
			value={{ metadata, setMetadata, details, setDetails }}
		>
			{children}
		</DetailsContext.Provider>
	);
}
