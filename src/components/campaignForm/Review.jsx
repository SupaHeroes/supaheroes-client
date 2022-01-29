import React from 'react';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';
import ProjectButton from '../projects/ProjectButton';

const Review = () => {
	const { metadata } = useDetails();
	return (
		<div>
			<h1>{metadata.title}</h1>
			<p>{metadata.details.about}</p>
			<div>
				<ProjectButton link={metadata.website} title={'Website'} />

				<ProjectButton link={metadata.whitepaper} title={'whitepaper'} />

				<ProjectButton link={metadata.socials.twitter} title={'twitter'} />

				<ProjectButton link={metadata.socials.discord} title={'discord'} />
			</div>

			<div>
				<h3>Rewards</h3>
				<div>
					{metadata.tiers.map((tier) => (
						<div>
							<p>{tier.title}</p>
							<p>{tier.description}</p>
							<p>{tier.price}</p>
							<p>{tier.quantities}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Review;
