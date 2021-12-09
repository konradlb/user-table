import React from "react";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";

function TableHeader() {
  return (
    <Row className="table-header">
      <Col>
        <h2>Manage users</h2>
      </Col>
      <Col>
        <a href="/ppp" className="btn btn-success">
          <PlusIcon />
          <span>Add User</span>
        </a>
      </Col>
    </Row>
  );
}

export default TableHeader;
