import Card from 'react-bootstrap/Card';
import Ach from '../images/Achyuth.jpg'
function ben() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Ach} />
      <Card.Body>
        <Card.Title>Achyuth (B-tech,MBBS)</Card.Title>
        <Card.Text>
          Founder of South Paradise
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default ben;