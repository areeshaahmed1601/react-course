import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <h2>This is Namaste React</h2>
        {/* <User name={"Areesha Ahmed(function)"} /> */}

        <UserClass />
      </div>
    );
  }
}

export default About;
