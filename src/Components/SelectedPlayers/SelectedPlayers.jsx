import React from "react";
import SelectedCards from "../SelectedCards/SelectedCards";

const SelectedPlayers = ({ purchasedPlayers, removePlayers }) => {
  return (
    <div className="container mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCards
          removePlayers={removePlayers}
          player={player}
        ></SelectedCards>
      ))}
    </div>
  );
};

export default SelectedPlayers;
