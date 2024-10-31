import React from "react";
import { CDN_URL } from "../utils/utils";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left"
          >
            <div className="py-2 flex justify-between">
              <div>
                <span>{item.card.info.name}</span>{" "}
                <span>
                  - $
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <div>
                <img src={CDN_URL + item.card.info.imageId} className="w-14" />
                <button className="p-2 rounded-lg bg-black text-white">
                  Add +
                </button>
              </div>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
