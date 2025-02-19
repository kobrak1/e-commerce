import Sliders from "../components/Sliders/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import Blogs from "../components/Blogs/Blogs";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Brands from "../components/Brands/Brands";

const HomePage = () => {
  return (
    <>
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <CampaignSingle />
      <Brands />
    </>
  );
};

export default HomePage;
