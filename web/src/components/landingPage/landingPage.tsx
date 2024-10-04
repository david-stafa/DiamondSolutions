import Articles from "./articles/articles";
import Banner from "./bannerImage/banner";
import BrandDescription from "./brandDescription/brandDescription";
import CategoryBanner from "./categoryBanner/categoryBanner";
import JewelryCategoryLandingPage from "./jewelryCategoryLandingPage/jewelryCategoryLP";
import NewJewelry from "./newJewelry/newJewelry";

const LandingPage = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-slate-200 to-slate-100 xl:pt-8">
        <Banner />
      </div>
      <BrandDescription />
      <NewJewelry />
      <JewelryCategoryLandingPage />
      <CategoryBanner />
      {/* <Articles /> */}
    </div>
  );
};

export default LandingPage;
