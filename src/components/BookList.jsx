import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
  const [search, setSeach] = useState("");
  const [selectedBook, setSelectedBook] = useState("");

  const handleChange = (e) => {
    setSeach(e.target.value);
  };

  const handleSelected = (selectedNow) => {
    if (selectedBook === selectedNow) {
      setSelectedBook(null);
    } else {
      setSelectedBook(selectedNow);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Form className="mb-3" onSubmit={handleSubmit}>
            <Form.Group controlId="searchInput">
              <Form.Label>Che stai cercando?</Form.Label>
              <Form.Control type="text" value={search} onChange={handleChange}></Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={6} className="mb-3">
          <Row>
            {props.selectedBookList
              .filter((books) => books.title.toLowerCase().includes(search.toLowerCase()))
              .map((book) => (
                <SingleBook key={book.asin} book={book} selected={book.asin === selectedBook} handleSelected={handleSelected} />
              ))}
          </Row>
        </Col>
        <Col xs={6}>
          <CommentArea bookId={selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
