import React from "react";
import { useEffect } from "react";

const User = ({ name }) => {
  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/areeshaahmed1601");
    const jsonData = data.json();
    console.log(jsonData);
  }
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Pakistan</h3>
      <h4>Contact: @123</h4>
    </div>
  );
};

export default User;
