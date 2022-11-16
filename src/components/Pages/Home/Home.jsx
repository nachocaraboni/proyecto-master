import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Css} from '../../NavBar/index';
export const Home = () =>{
  
  const containerBody = {Css} 

    return(
      <>
      <div className={containerBody}>home
          
      </div>
    </>
    )
}
/* reemplazar por la base de datos 
desestructuro cada llave de posicion del array


<Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>nombre</Card.Title>
                  <Card.Text>
                    descripcion
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>*/