import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import CustomButton from "../CustomButton/index";

export default function ProjectContactForm(props) {
  return (
    <div className="d-block text-left p-4">
      <h2>Make an Enquiry</h2>
      <hr />
      <Form className="mt-3">
        <Row>
          <Col className="mr-3">
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="number" />
          <Form.Text className="text-muted">
            We'll never share your phone number with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="text-center d-flex justify-content-center mt-4">
          <CustomButton customClassName="submit-button" buttonText="SUBMIT" />
        </Form.Group>
      </Form>
    </div>
  );
}
