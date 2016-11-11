import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Footer from './pages/Footer'

const styles = {
	buttonStyle: {
        display: 'block',
    	cursor: 'pointer',
    	color: 'white',
    	fontSize: '1 rem'
	},
	linkStyle: {
    	textDecoration: 'none',
    	padding: '10px 15px'
	}
   };

class App extends Component {

	render() {
		return (
			<div>
			<AppBar title="My App">
				<IndexLink to="/" style={styles.linkStyle}><FlatButton label="Home" style={styles.buttonStyle}/></IndexLink>
				<Link to="contact" style={styles.linkStyle}><FlatButton label="Contact Us" style={styles.buttonStyle}/></Link>
				<Link to="about" style={styles.linkStyle}><FlatButton label="About Us" style={styles.buttonStyle}/></Link>
			</AppBar>
			{this.props.children}
			<Footer />
			</div>
			)
	}
}

export default App;
