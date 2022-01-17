const CracoLessPlugin = require('craco-less');

module.exports = {
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
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

							'@body-background': '#1B1C1E',
							'@component-background': '#1B1C1E',

							'@text-color': '#fff',
							'@menu-item-active-border-width': '10px',
							'@input-bg': '#1B1C1E',
							'@input-icon-color': '#fff',

							'@breadcrumb-base-color': '#727272',
							'@breadcrumb-last-item-color': '#DEFFEE',
							'@breadcrumb-link-color': '#727272',
							'@breadcrumb-separator-color': '#727272',

							'@dropdown-menu-bg': '#1B1C1E',
							'@modal-header-bg': '#1B1C1E',

							'@select-item-selected-color': '#303030',

							// Steps
							// ---
							// @process-tail-color: @border-color-split;
							// @steps-nav-arrow-color: fade(@black, 25%);
							'@steps-background': '#67E9F1',
							// @steps-icon-size: 32px;
							// @steps-icon-custom-size: @steps-icon-size;
							// @steps-icon-custom-top: 0px;
							// @steps-icon-custom-font-size: 24px;
							// @steps-icon-top: -0.5px;
							// @steps-icon-font-size: @font-size-lg;
							// @steps-icon-margin: 0 8px 0 0;
							// @steps-title-line-height: @height-base;
							// @steps-small-icon-size: 24px;
							// @steps-small-icon-margin: 0 8px 0 0;
							// @steps-dot-size: 8px;
							// @steps-dot-top: 2px;
							// @steps-current-dot-size: 10px;
							// @steps-description-max-width: 140px;
							// @steps-nav-content-max-width: auto;
							// @steps-vertical-icon-width: 16px;
							// @steps-vertical-tail-width: 16px;
							// @steps-vertical-tail-width-sm: 12px;
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
