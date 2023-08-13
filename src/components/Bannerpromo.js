import React from 'react'
import {Card, Col} from "react-bootstrap";

const Bannerpromo = (props) => {
  return (
    <Col xs={12} className="mb-4 text-center">
    <Card className="shadow">
           <Card.Img variant="top" src={props.image} />
           <Card.Body>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
    </Card>
    </Col>
  )
}

export default Bannerpromo