import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { setUsers } from "../../redux/actions/userActions";
import TableHeader from "./TableHeader";
import { ReactComponent as Trash } from "../../images/trash-solid-FA.svg";
import { ReactComponent as UserEdit } from "../../images/user-edit-solid-FA.svg";

function UsersTable() {
  const users = useSelector((state) => state).allUsers.users;

  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const users = await (
      await fetch("http://jsonplaceholder.typicode.com/users")
    ).json();
    console.log(users);
    dispatch(setUsers(users));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link to={`/user-deail/${user.id}`} className="edit">
                  {user.name}
                </Link>
              </td>
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
    </>
  );
}

export default UsersTable;
