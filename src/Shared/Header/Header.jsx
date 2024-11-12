
import Banner from '../../Pages/Banner/Banner';
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';
import Topbar from '../TopBar/Topbar';
import TopNav from '../TopNav/TopNav';

const Header = () => {
    return (
        <div>
            <TopBanner/>
            <Topbar/>
            <TopNav/>
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Header;