import BannerImage from "./bannerImage";
import { sanityFetch } from "@/sanity/lib/client";

const BANNERIMAGE_QUERY = `*[_type == 'bannerImage']{
  name,
  "imageUrl": image.asset->url
}`;

const Banner = async () => {
  const banners = await sanityFetch({
    query: BANNERIMAGE_QUERY,
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <>
      <BannerImage banners={banners} />
    </>
  );
};

export default Banner;
