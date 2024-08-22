import React from "react";
import ReactDOM from "react-dom/client";

/*
//Header
  --Logo
  -Nav Items
//Body 
  -Search bar
  -Card Container
    -Card
      -Img
      -Name of Res,Star Rating,cusine
//Footer
   -copyright
   -links
   -contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resObj }) => {
  const { name, cusine, avgRating, costForTwo } = resObj;
  return (
    <div className="res-card" style={{ backgroundColor: "f0f0f0" }}>
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e01dZKD7v6bX6yICzi-rqjGsebFxgMyD5Q&s"
      />
      <h3>{name}</h3>
      <h4>{cusine}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

const resObj = [
  {
    id: "334475",
    name: "KFC",
    costForTwo: 40000,
    avgRating: "4.8",
    cusine: "Biryani Asian taste",
  },
];
