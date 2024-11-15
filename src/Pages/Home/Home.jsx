import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Navbar2 from "../Navbar2/Navbar2";
import NewArrivals from "./HomePageCard/NewArrivals";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-6">
        <Banner></Banner>
      </div>
      <div className="mt-6">
        <Navbar2 />
        <NewArrivals />
      </div>
    </div>
  );
};

export default Home;
