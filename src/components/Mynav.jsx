import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

const Mynav = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarBrand className="text-success">Libreria online</NavbarBrand>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Mynav;
