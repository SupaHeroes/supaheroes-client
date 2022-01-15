import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<MoralisProvider
				appId={process.env.APP_ID}
				serverUrl={process.env.SERVER_URL}
			>
				<App />
			</MoralisProvider>
			,
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
