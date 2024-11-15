import TopBanner from "../TopBanner/TopBanner";
import Topbar from "../TopBar/Topbar";
import TopNav from "../TopNav/TopNav";

const Header = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto">
      <TopBanner />
      <Topbar />
      <TopNav />
    </div>
  );
};

export default Header;
