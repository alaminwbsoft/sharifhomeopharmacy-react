import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Navbar2 from "../Navbar2/Navbar2";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-4">
        <Banner></Banner>
      </div>
      <div className="mt-4">
        <Navbar2 />
      </div>
    </div>
  );
};

export default Home;
