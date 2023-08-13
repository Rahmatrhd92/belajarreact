
import {Card, Col} from "react-bootstrap";
const Cardkegiatan = ({menu}) => {
    return(
        <>
        <Col md={4} xs={12} className="mb-4 text-center">
        <Card className="shadow">
            <Card.Img variant="top" src={"../assets/"+menu.category.nama.toLowerCase()+"/"+menu.gambar}/>
              <Card.Body>           
                <Card.Text>
                   {menu.nama} 
                     </Card.Text>
                       {menu.descripsi}
                       </Card.Body>
            </Card>
            </Col>
         </>
         
        
        
        
          
           
            
    )
}
export default Cardkegiatan