import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Formsy from 'formsy-react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import { greenA200, blue500 } from 'material-ui/styles/colors';

const errorMessages = {
    emailError: "Please enter your email",
    passwordError: "Please provide correct password"
  };
const styles = {
  cardStyle: {
    marginTop: 20
  },
  mediumIcon: {
    width: 100,
    height: 100
  },
   medium: {
    width: 120,
    height: 120,
    padding: 30
  }
};

class Login extends Component {

  constructor() {
    super();
    this.state= {
      canSubmit: false
    };
  }
    enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }
	render() {
		return (
				<Grid>
          <Col xs={12}>
          <Card zDepth={1} style={styles.cardStyle}>
            <CardHeader
              title="Login"
            />
            <Row center="xs">
              <Formsy.Form
                onValid={this.enableButton.bind(this)}
                onInvalid={this.disableButton.bind(this)}
                onValidSubmit={this.submitForm.bind(this)}
                onInvalidSubmit={this.notifyFormError.bind(this)}
              >
                <IconButton
                iconStyle={styles.mediumIcon}
                style={styles.medium}
                >
                    <ActionAccountCircle style={styles.medium} color={blue500} hoverColor={greenA200} />
                </IconButton>
              <CardText>
        			<Row>
          				<Col xs={12} sm={12} md={12} lg={12}>
                    <FormsyText
                      name="email"
                      validations="isEmail"
                      validationError={errorMessages.emailError}
                      required
                      hintText="Enter your user name"
                      floatingLabelText="Username"
                      updateImmediately
                    />
                  </Col>
        			</Row>
        			<Row>
          				<Col xs={12} sm={12} md={12} lg={12}>
                  <FormsyText
                      type="password"
                      name="password"
                      validations="minLength:8"
                      validationError={errorMessages.passwordError}
                      required
                      hintText="Enter your user password"
                      floatingLabelText="Password"
                      updateImmediately
                    />
                  </Col>
        			</Row>
              <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                  <RaisedButton
                    primary={true}
                    type="submit"
                    label="Submit"
                    disabled={!this.state.canSubmit}
                  />
                  </Col>
              </Row>
              </CardText>
              </Formsy.Form>
            </Row>
            </Card>
          </Col>
      	</Grid>
			)
	}
}

export default Login;