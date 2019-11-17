import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Container, Row, Col, Label } from "reactstrap";
import { registrationFormProps } from "./EventForm.config";
import "./RegistrationForm.css";

class RegistrationForm extends React.Component {
  formProps = {};

  componentWillUnmount() {
    this.formProps = null;
  }

  handleSubmit(values) {
    const { registrationRequestAction } = this.props;
    registrationRequestAction(values);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="form">
              <h1>Register</h1>
              <Formik {...registrationFormProps}>
                {props => {
                  const { touched, errors } = props;
                  this.formProps = props;
                  return (
                    <Form onSubmit={() => this.handleSubmit(props.values)}>
                      <Row className="form-group">
                        <Col xs="4" sm="4">
                          <Label for="name">Name</Label>
                        </Col>
                        <Col>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className={`form-control ${
                              touched.name && errors.name ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="name"
                            className="invalid-feedback"
                          />
                        </Col>
                      </Row>
                      <Row className="form-group" Group>
                        <Col xs="4" sm="4">
                          <Label for="dob">DOB</Label>
                        </Col>
                        <Col>
                          <Field
                            type="date"
                            id="dob"
                            name="dob"
                            placeholder="Enter your date of birth in yyyy-MM-dd format"
                            className={`form-control ${
                              touched.dob && errors.dob ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="dob"
                            className="invalid-feedback"
                          />
                        </Col>
                      </Row>
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
                          <Label for="phone">Phone Number</Label>
                        </Col>
                        <Col>
                          <Field
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            className={`form-control ${
                              touched.phone && errors.phone ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="phone"
                            className="invalid-feedback"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="3" sm="3"></Col>
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

export default RegistrationForm;
