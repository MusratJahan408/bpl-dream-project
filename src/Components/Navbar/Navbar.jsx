import navImg from "../../assets/logo.png";
import coin from "../../assets/dollar1.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="flex-1">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>{availableBalance}</span> <span>Coin</span>
          <img className="w-5 h-5" src={coin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
