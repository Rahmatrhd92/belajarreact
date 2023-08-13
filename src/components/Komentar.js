import React from 'react'
import {Form, Button} from "react-bootstrap";

const Komentar = ({emailKomen, pesan, handleChange, handleSubmit, id}) => {
  return (
    <Form onSubmit={handleSubmit} className="mt-5">
      <h2 className='text-center'> {id ? "Edit Data" : "HUBUNGI KAMI"}</h2>
      <Form.Group controlId="emailKomen">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          type="email"
          name="emailKomen"
          value={emailKomen}
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>

      <Form.Group controlId="pesan">
        <Form.Label>Pesan</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="pesan"
          value={pesan}
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>
      <Button className="mt-3" variant="primary" type="submit">Submit</Button>
    </Form>
  );
};

export default Komentar