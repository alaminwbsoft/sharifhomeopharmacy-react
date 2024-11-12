import topBannerImg from "../../assets/topBannerImg.gif";

const TopBanner = () => {
    return (
        <div className="bg-primary container">
            <img src={topBannerImg} alt="" className="w-full object-cover" />
        </div>
    );
};

export default TopBanner;
