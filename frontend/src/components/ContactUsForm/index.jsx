import React from "react";
import { Form } from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import "./styles.scss";

export default function ContactUsForm(props) {
  const { customContainerClassName } = props;
  return (
    <div
      className={`d-block ${
        customContainerClassName ? customContainerClassName : ""
      }`}
    >
      <h2>Make an Enquiry</h2>
      <hr />
      <Form className="mt-3">
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
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
