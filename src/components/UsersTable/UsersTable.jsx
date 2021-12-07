import React from "react";

import { Button, Col, Container, Jumbotron, Row, Table } from "react-bootstrap";
import { ReactComponent as Trash } from "../../images/trash-solid-FA.svg";
import { ReactComponent as UserEdit } from "../../images/user-edit-solid-FA.svg";

import { users } from "./../users";

function UsersTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td className="actions-row">
              <button className="edit">
                <UserEdit />
              </button>
              <button className="delete">
                <Trash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UsersTable;
