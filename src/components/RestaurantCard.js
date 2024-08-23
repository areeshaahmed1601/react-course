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

export default RestaurantCard;
