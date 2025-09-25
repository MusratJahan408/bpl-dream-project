import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";

const fetchPromise = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

const playersPromise = fetchPromise();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(10000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  const removePlayers = (p) => {
    const filterData = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name
    );
    setPurchasedPlayers(filterData);
    setAvailableBalance(
      availableBalance +
        parseInt(p.price.split("USD").join("").split(",").join(""))
    );
  };
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="container mx-auto mt-16 flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available Players"
            : `Selected Player (${purchasedPlayers.length}/6)`}
        </h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`btn px-7 py-3 border font-bold border-r-0 rounded-xl rounded-r-none ${
              toggle ? "bg-[#E7FE29]" : ""
            } `}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn px-7 py-3 border font-bold border-l-0 rounded-xl rounded-l-none ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayers={removePlayers}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
