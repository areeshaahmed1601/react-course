import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent contructor");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React</h2>
        {/* <User name={"Areesha Ahmed(function)"} /> */}

        <UserClass />
      </div>
    );
  }
}

export default About;
