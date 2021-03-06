import React, { useState } from "react";
import { Accordion, Button, Card, Col, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AddPlaylistItem = ({ onAddItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(item);
    setItem(null);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setItem({
      id: uuidv4(),
      name: e.target.value,
      createdAt: Date.now(),
      songs: [],
    });
  };

  return (
    <Accordion className="mt-4">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Create Playlist
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Row className="align-items-center">
                <Col>
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    Add playlist item
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Enter playlist name"
                    onChange={handleOnChange}
                    value={item ? item.name.value : ""}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" className="mb-2">
                    Create
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AddPlaylistItem;
