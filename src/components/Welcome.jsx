import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Alert variant="primary" className="my-3">
      <Alert.Heading>Tutti i migliori libri</Alert.Heading>
      <p>Cerca tutti i libri del nostro catalogo</p>
    </Alert>
  );
};

export default Welcome;
