import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

class Home extends Component {
	render() {
		return (
				<Grid>
        			<Row>
          				<Col xs={6} md={3}>Hello, world!</Col>
        			</Row>
        			<Row>
          				<Col xs={12} md={4}>Hello, world!</Col>
        			</Row>
      			</Grid>
			)
	}
}

export default Home;