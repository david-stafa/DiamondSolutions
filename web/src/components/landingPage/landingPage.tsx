import Articles from "./articles/articles";
import Banner from "./bannerImage/banner";
import BrandDescription from "./brandDescription/brandDescription";
import JewelryCategoryLandingPage from "./jewelryCategoryLandingPage/jewelryCategoryLP";
import NewJewelry from "./newJewelry/newJewelry";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <BrandDescription />
      <JewelryCategoryLandingPage />
      <NewJewelry />
      <Articles />
    </div>
  );
};

export default LandingPage;
