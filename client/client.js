import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';

injectTapEventPlugin();

render(
	<MuiThemeProvider>
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="contact" component={ContactUs}></Route>
			<Route path="about" component={AboutUs}></Route>
			<Route path="login" component={Login}></Route>
		</Route>
	</Router>
	</MuiThemeProvider>, 
	document.getElementById("app"));