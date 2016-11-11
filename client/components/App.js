import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Layout from './pages/Layout';



class App extends Component {
	
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					<IndexRoute component={Login}></IndexRoute>
					<Route path="contact" component={ContactUs}></Route>
					<Route path="about" component={AboutUs}></Route>
					<Route path="home" component={Home}></Route>
				</Route>
			</Router>
			)
	}
}

export default App;