import React from "react";
import { Form } from "react-bootstrap";

const DatePicker = ({ selectedDate, handleDateChange }) => {
  return (
    <Form.Group controlId="formBasicDate">
      <Form.Label>Date</Form.Label>
      <Form.Control
        type="date"
        value={selectedDate}
        onChange={(e) => handleDateChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default DatePicker;
