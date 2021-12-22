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
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
