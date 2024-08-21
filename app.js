import React from "react";
import ReactDOM from "react-dom/client";

//JSX - transpiled before it reaches the JS engine(Parcel , Babel)
//React.createElement->React Element(JS obj)->HTML Element(renderer)
const Title = () => <h1 className="head">Hello from Areesha</h1>;

console.log(Title);

const HeadingComponent = () => (
  <div>
    <Title />
    <h1>Hello React </h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
