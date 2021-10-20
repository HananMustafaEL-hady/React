import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
function Users() {
  useEffect(() => {
    async function getuser() {
      const res = await fetch("https://randomuser.me/api?results=6", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((resData) => {
          // console.log(resData.results);
          setUsers(resData.results);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    getuser();
  }, []);
  const [users, setUsers] = useState();

  console.log(users);

  return (
    <div className="display-grid">
      {users?.map((item, index) => (
        <Card
          key={index}
          name={item.name.first + " " + item.name.last}
          imgsrc={item.picture.large}
          city={item.location.city}
          country={item.location.country}
        />
      ))}
    </div>
  );
}

export default Users;
