import React, { useEffect, useState } from "react";

function UserDetail({ match }) {
  useEffect(() => {
    fetchUser();
  }, []);

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const user = await (
      await fetch(
        `http://jsonplaceholder.typicode.com/users/${match.params.id}`
      )
    ).json();
    setUser(user);
  };

  return (
    <div>
      <h3>match.params.id: {match.params.id}</h3>
      <h3>user: {user?.username}</h3>
    </div>
  );
}

export default UserDetail;
