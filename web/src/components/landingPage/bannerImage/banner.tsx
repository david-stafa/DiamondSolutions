import { client } from "@/sanity/client";
import BannerImage from "./bannerImage";
import { revalidateTag } from "next/cache";
import { sanityFetch } from "@/sanity/lib/client";

const BANNERIMAGE_QUERY = `*[_type == 'bannerImage']{
  name,
  "imageUrl": image.asset->url
}`;

const Banner = async () => {
  // const banners = await client.fetch<Banner[]>(BANNERIMAGE_QUERY, { next: { revalidate: 60 } });
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
