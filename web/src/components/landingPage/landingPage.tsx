import Articles from "./articles/articles";
import Banner from "./bannerImage/banner";
import BrandDescription from "./brandDescription/brandDescription";
import CategoryBanner from "./categoryBanner/categoryBanner";
import JewelryCategoryLandingPage from "./jewelryCategoryLandingPage/jewelryCategoryLP";
import NewJewelry from "./newJewelry/newJewelry";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <BrandDescription />
      <NewJewelry />
      <JewelryCategoryLandingPage />
      <CategoryBanner />
      <Articles />
    </div>
  );
};

export default LandingPage;
