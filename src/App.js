import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([
    {
      id: "1",
      name: "harry potter",
      director: "j k rowling",
      staring: ["harry", "hermionie", "snape"],
      image:
        "https://images.pexels.com/photos/8389931/pexels-photo-8389931.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      category: "fiction",
      certificate: "C",
      year: 1980,
      description:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. ",
    },
    {
      id: "2",
      name: "harry potter",
      director: "j k rowling",
      staring: ["harry", "hermionie", "snape"],
      image:
        "https://images.pexels.com/photos/8389931/pexels-photo-8389931.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      category: "fiction",
      certificate: "B",
      year: 1980,
      description:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. ",
    },
    {
      id: "3",
      name: "harry potter",
      director: "j k rowling",
      staring: ["harry", "hermionie", "snape"],
      image:
        "https://images.pexels.com/photos/8389931/pexels-photo-8389931.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      category: "fiction",
      certificate: "A",
      year: 1980,
      description:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. ",
    },
  ]);
  const setBorderColor = (certificate) => {
    switch (certificate) {
      case "A":
        return "primary";
      case "B":
        return "success";
      case "C":
        return "danger";
      case "D":
        return "warning";
      default:
        return "secondary";
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <div className="d-flex p-2 flex-row flex-wrap">
        {movieList &&
          movieList.map((movie) => {
            return (
              <div className="p-4 d-flex " key={movie.id}>
                <Card
                border={setBorderColor(movie.certificate)}
                className="rounded"
                style={{ width: "24rem", border: '3px solid' }}
              >
                <Card.Img variant="top" src={movie.image} />
                <Card.Body>
                  <Card.Title>{movie.name}</Card.Title>
                  <Card.Subtitle>{movie.director}</Card.Subtitle>
                  <Card.Text>{movie.description}</Card.Text>
                  <Button variant="success">View</Button>
                  <Button variant="danger">Delete</Button>
                </Card.Body>
              </Card>
              </div>
              
            );
          })}

        </div>
        
      </Container>
    </>
  );
}

export default App;
