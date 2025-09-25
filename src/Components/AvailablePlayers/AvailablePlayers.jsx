import { use } from "react";
import PlayerCards from "../PlayerCards/PlayerCards";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playersData = use(playersPromise);

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {playersData.map((player) => (
        <PlayerCards
          player={player}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
        ></PlayerCards>
      ))}
    </div>
  );
};

export default AvailablePlayers;
