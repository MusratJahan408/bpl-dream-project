import React, { useState } from "react";
import user from "../../assets/user-1.png";
import flag from "../../assets/report-1.png";
import { toast } from "react-toastify";

const PlayerCards = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("USD").join("").split(",").join("")
    );
    if (availableBalance < playerPrice) {
      toast("Not Enough Balance");
      return;
    }
    if (purchasedPlayers.length === 6) {
      toast("6 Cards all ready added");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData]);
  };
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="rounded-2xl p-6 overflow-hidden">
        <img
          className="rounded-2xl w-full h-[350px] object-cover"
          src={player.player_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-3">
          <img className="w-6 h-6" src={user} alt="" />
          <h2 className="card-title">{player.player_name}</h2>
        </div>
        <div className="flex justify-between items-center border-b border-b-gray-300 pb-4">
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={flag} alt="" />
            <p>{player.player_country}</p>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>
        <div className="flex justify-between items-center font-bold">
          <h3>Rating:</h3>
          <h3>{player.rating}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className=" font-bold">{player.bating_style}</h3>
          <h3>{player.bowling_style}</h3>
        </div>
        <div className="card-actions flex items-center justify-between">
          <h3 className=" font-bold">Price: ${player.price}</h3>
          <button
            disabled={isSelected}
            className="btn"
            onClick={() => {
              handleSelected(player);
            }}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCards;
