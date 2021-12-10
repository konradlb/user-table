import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../../redux";

function UserDetail({ match, userData, fetchUser }) {
  useEffect(() => {
    fetchUser(match.params.id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div>
        <h3>Name: {userData.user.username}</h3>
        <h3>Username: {userData.user.username}</h3>
        <h3>Email: {userData.user.email}</h3>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { usersData: state.users, userData: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
