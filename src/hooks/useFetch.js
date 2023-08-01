import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const base_url = "https://random-data-api.com/api/v2/users?size=30";
  const [users, setUsers] = useState();
  const getAllUsers = () => {
    axios
      .get(base_url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  /* fetch(base_url)
    .then(res=>(res.json()))
    .then(data=>setUsers(data)) */

  return { users, getAllUsers };
};

export default useFetch;
