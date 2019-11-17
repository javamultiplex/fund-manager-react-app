import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Container, Row, Col, Label } from "reactstrap";
import { LoginFormProps } from "./LoginForm.config";
import './LoginForm.css'

class LoginForm extends React.Component {
  formProps = {};

  componentWillUnmount() {
    this.formProps = null;
  }

  handleSubmit(values) {
    const { loginRequestAction } = this.props;
    console.log(this.props);
    loginRequestAction(values);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="form">
              <h1>Login</h1>
              <Formik {...LoginFormProps}>
                {props => {
                  const { touched, errors } = props;
                  this.formProps = props;
                  return (
                    <Form onSubmit={() => this.handleSubmit(props.values)}>
                      <Row className="form-group">
                        <Col xs="4" sm="4">
                          <Label for="email">Email ID</Label>
                        </Col>
                        <Col>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your emai id"
                            className={`form-control ${
                              touched.email && errors.email ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="email"
                            className="invalid-feedback"
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Col xs="4" sm="4">
                          <Label for="phone">Password</Label>
                        </Col>
                        <Col>
                          <Field
                            type="pasword"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className={`form-control ${
                              touched.password && errors.password ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="password"
                            className="invalid-feedback"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col  xs="3" sm="3"></Col>
                        <Col>
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            {props.isSubmitting ? "Please wait..." : "Submit"}
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;
