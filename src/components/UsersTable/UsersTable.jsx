import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { fetchUsers, deleteUser } from "../../redux";
import TableHeader from "./TableHeader";
import { ReactComponent as Trash } from "../../images/trash-solid-FA.svg";
import { ReactComponent as UserEdit } from "../../images/user-edit-solid-FA.svg";

function UsersTable({ usersData, onFetchUsers, onDeleteUser }) {
  useEffect(() => {
    onFetchUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return usersData.loading ? (
    <h2>Loading</h2>
  ) : usersData.error ? (
    <h2>{usersData.error}</h2>
  ) : (
    <>
      <TableHeader />

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
          {usersData.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link to={`/user-detail/${user.id}`} className="edit">
                  {user.name}
                </Link>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className="actions-row">
                <button className="edit">
                  <UserEdit />
                </button>
                <button
                  className="delete"
                  onClick={() => {
                    onDeleteUser(user.id);
                  }}
                >
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

const mapStateToProps = (state) => {
  return { usersData: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => dispatch(fetchUsers()),
    onDeleteUser: (userId) => dispatch(deleteUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
