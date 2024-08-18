/**
 *
 *<div>
 
     <div>
      <h1></h1>
     </div>
 </div>
 *
 *
 */

/**case 2 :siblings //create array for children
 *
 *<div>
 
     <div>
      <h1></h1>
      <h1></h1>   
     </div>
 </div>
 *
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello from areesha"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
