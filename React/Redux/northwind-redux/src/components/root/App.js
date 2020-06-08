import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navi />
          <Dashboard />
        </Container>
      </div>
    );
  }
}
