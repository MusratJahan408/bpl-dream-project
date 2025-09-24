import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";

const fetchPromise = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPromise();
  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
