const CracoLessPlugin = require('craco-less-fix');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#67E9F1',

							'@text-color': '#fff',
							'@menu-item-active-border-width': '10px',
							'@input-bg': '#1B1C1E',
							'@input-icon-color': '#fff',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
