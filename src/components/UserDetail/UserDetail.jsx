import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function UserDetail({ match, usersData }) {
  const user = usersData.users[match.params.id];

  return (
    <div>
      <h3>match.params.id: {match.params.id}</h3>
      <h3>user: {user?.username}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { usersData: state.users };
};

export default connect(mapStateToProps)(UserDetail);
