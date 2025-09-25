import React from "react";

const SelectedCards = ({ player, removePlayers }) => {
  const handleRemovePlayer = () => {
    removePlayers(player);
  };
  return (
    <div className="border border-gray-300 rounded-2xl flex justify-between items-center mt-6 p-4">
      <div className="flex items-center gap-3">
        <img
          className="w-[80px] h-[80px] rounded-2xl"
          src={player.player_image}
          alt=""
        />
        <div>
          <h3 className="text-2xl font-semibold">{player.player_name}</h3>
          <p>{player.playing_role}</p>
        </div>
      </div>
      <div onClick={handleRemovePlayer}>
        <img src="https://i.ibb.co.com/8LJ36hPk/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCards;
