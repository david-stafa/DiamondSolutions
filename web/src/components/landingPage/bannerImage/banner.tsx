import { sanityFetch } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import BannerImage from "./bannerImage";


const BANNERIMAGE_QUERY = `*[_type == 'bannerImgage']{
  name,
  "imageUrl": image.asset->url
}`;

const Banner = async () => {
  const banners = await sanityFetch<SanityDocument[]>({
    query: BANNERIMAGE_QUERY,
  });


  return (
    <>
      <BannerImage banners={banners} />
    </>
  );
};

export default Banner;
