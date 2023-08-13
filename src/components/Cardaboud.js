import {Card, Button} from "react-bootstrap";
const Cardaboud = (props)=>{
    return(
        <Card>
           <Card.Img variant="top" src={props.image} />
           <Card.Body>
             <Card.Title>{props.about}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="outline-primary">Go somewhere</Button>
            </Card.Body>
    </Card>
    )
}

export default Cardaboud;