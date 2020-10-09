import React from "react";
import { Modal, Button, Container, Row, Form } from "react-bootstrap";
export default function EnquireNowModal(props) {
  const { show, handleModalClose } = props;
  return (
    <Modal show={show} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enquire Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form className="mt-3">
            <Row className="d-block">
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleModalClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
