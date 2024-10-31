import { CDN_URL } from "../utils/utils";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-slate-200 rounded-lg hover:bg-slate-300">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

//Highrt order component

//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
