const CracoLessPlugin = require('craco-less');

module.exports = {
	style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
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

							'@breadcrumb-base-color': '#727272',
							'@breadcrumb-last-item-color': '#DEFFEE',
							'@breadcrumb-link-color': '#727272',
							'@breadcrumb-separator-color': '#727272',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
