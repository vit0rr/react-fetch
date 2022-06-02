import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  const getUser = () => {
    axios.get("https://api.github.com/users/vit0rr").then((res) => {
      const theUser = res.data;
      setUser(theUser);
    });
  };

  useEffect(() => getUser(), []);

  if (!user) return <span>Loading...</span>
  return (
    <div className="App">
      {console.log(user.avatar_url)}
      <img src={user.avatar_url}></img>
    </div>
  );
}

export default App;
