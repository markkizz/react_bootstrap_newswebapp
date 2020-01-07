import React, { Component } from "react";
import { Nav, FormControl } from "react-bootstrap";

export class NavLink extends Component {
  state = {
    navLists: [
      "U.S.",
      "World",
      "Bussiness",
      "Tech & Science",
      "Culture",
      "Newsgeek",
      "Sports",
      "Health",
      "Opinion",
      "Vantage"
    ]
  };

  render() {
    return (
      <>
        <Nav defaultActiveKey="#" as="ul" id="nav_link">
          {this.state.navLists.map((list, i) => (
            <Nav.Item as="li" key={i}>
              <Nav.Link href="#">{list}</Nav.Link>
            </Nav.Item>
          ))}
          <Nav.Item>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Nav.Item>
        </Nav>
      </>
    );
  }
}

export default NavLink;
