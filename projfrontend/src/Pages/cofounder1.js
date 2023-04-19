import Card from 'react-bootstrap/Card';
import Ramesh from '../images/ram.jpg';
function Ram() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Ramesh} />
      <Card.Body>
        <Card.Title>Ramesh</Card.Title>
        <Card.Text>
          Branch Manager
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Ram;