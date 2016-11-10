import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

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
	navigate() {
		this.props.history.pushState(null, "/");
	}
	render() {
		return (
			<AppBar title="My App">
				<IndexLink to="/" style={styles.linkStyle}><FlatButton label="Home" style={styles.buttonStyle}/></IndexLink>
				<Link to="contact" style={styles.linkStyle}><FlatButton label="Contact Us" style={styles.buttonStyle}/></Link>
				<Link to="about" style={styles.linkStyle}><FlatButton label="About Us" style={styles.buttonStyle}/></Link>
			</AppBar>
			)
	}
}

export default App;