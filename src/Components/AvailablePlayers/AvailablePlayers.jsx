import { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div>
      <h1 className="text-2xl font-bold">Available Players</h1>
    </div>
  );
};

export default AvailablePlayers;
