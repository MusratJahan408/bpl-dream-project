import { use } from "react";
import user from "../../assets/user-1.png";
import flag from "../../assets/report-1.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {playersData.map((player) => (
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
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
