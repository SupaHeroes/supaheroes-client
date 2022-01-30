import React from 'react';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';
import ProjectButton from '../projects/ProjectButton';

const Review = () => {
	const { metadata } = useDetails();
	return (
		<div>
			<h1>{metadata.title}</h1>
			<p>{metadata.details.about}</p>
			<div className='flex'>
				<ProjectButton link={metadata.website} title={'Website'} />

				<ProjectButton link={metadata.whitepaper} title={'whitepaper'} />

				<ProjectButton link={metadata.socials.twitter} title={'twitter'} />

				<ProjectButton link={metadata.socials.discord} title={'discord'} />
			</div>

			<div className='bg-supadark-medium p-8 m-4'>
				<h3>Rewards</h3>
				<div>
					{metadata.tiers.map((tier) => (
						<div className='flex justify-between'>
							<p>Title: {tier.title}</p>
							<p>Description: {tier.description}</p>
							<p>Price: {tier.price}</p>
							<p>Quantaties: {tier.quantities}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Review;
