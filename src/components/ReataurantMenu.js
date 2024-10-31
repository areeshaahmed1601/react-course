import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const ReataurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);
  const [showItems, setShowItems] = useState(false);

  if (!resInfo) return <Shimmer />;

  const {
    name = "Unknown Restaurant",
    cuisines = [],
    costForTwoMessage = "Cost not available",
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  console.log(
    "item",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">{cuisines.join(",")}</p>
      <h2>Menu</h2>
      {/*categories accordion*/}
      {/* //controlled component */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card.card.title}
          data={category?.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ReataurantMenu;
