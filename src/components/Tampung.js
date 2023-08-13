import React from 'react'
import { Card, Container, Col, Row, Button } from "react-bootstrap";


const Tampung = ({komentars, editData}) => {
  return (
       <div>
         <Container className="mt-5">
        {komentars.map((komen, Maincontent) => {
          return (
            
            <Row key={Maincontent}>
              <Col md={4}>
                <Card>
                  <Card />
                  <Card.Body>
                    <Card.Title>{Maincontent}</Card.Title>
                    <Card.Text>{komen.emailKomen}</Card.Text>
                    <Card.Text>{komen.pesan}</Card.Text>
                  </Card.Body>
                  <Button className="mr-3" onClick={()=>editData(komen.id)}>edit</Button>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
       </div>

  );
};

export default Tampung