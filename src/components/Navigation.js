import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { API_URL } from "../utils/constans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import React, { Component } from "react";

// 5 proses pemanggilan font awesome
const Icon = ({ nama }) => {
  if (nama === "Banner")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (nama === "Undangan") return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Umrah")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};


export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
     
    };
  }

  //2 kemudian buatkan componentDidMount
  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        //cek untuk melihat array di console
        // console.log("Response : ", res)
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });
  }
  render() {
    // console.log("Categories: ", this.state.categories);
    const { categories } = this.state;
    const { changeCategory, categoryYangDipilih } = this.props;
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Rhd Graphic</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>

              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                {categories &&
                  categories.map((category) => (
                    <NavDropdown.Item
                      key={category.id}
                      //ditambahkan supaya bisa pilih category
                      onClick={() =>changeCategory(category.nama)} 
                      className={ categoryYangDipilih === category.nama && "category-aktif"}
                     
                      href="#action3"
                    >
                      <Icon nama={category.nama} />{category.nama}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
