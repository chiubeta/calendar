import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';

ReactDOM.render(
	<div style={{margin: "20px"}}>
		<h2>Calendar</h2>
		<Calendar />
	</div>
, document.getElementById('root'));