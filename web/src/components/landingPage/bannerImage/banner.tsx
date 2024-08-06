import { client } from "@/sanity/client";
import BannerImage from "./bannerImage";


const BANNERIMAGE_QUERY = `*[_type == 'bannerImage']{
  name,
  "imageUrl": image.asset->url
}`;

const Banner = async () => {
  const banners = await client.fetch<Banner[]>(BANNERIMAGE_QUERY);
  return (
    <>
      <BannerImage banners={banners} />
    </>
  );
};

export default Banner;
