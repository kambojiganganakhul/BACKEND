import Card from 'react-bootstrap/Card';
import Karthik from '../images/karthik.jpg';
function Kat() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Karthik} />
      <Card.Body>
        <Card.Title>Karthik Kat(B-tech)</Card.Title>
        <Card.Text>
          Hotel Manager
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Kat;