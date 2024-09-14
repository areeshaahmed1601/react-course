import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("contructor called");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar_url: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const jsonData = await data.json();

    this.setState({
      userInfo: jsonData,
    });

    console.log(jsonData);
  }
  render() {
    console.log("render called");
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        ></button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @123</h4>
      </div>
    );
  }
}

export default UserClass;
