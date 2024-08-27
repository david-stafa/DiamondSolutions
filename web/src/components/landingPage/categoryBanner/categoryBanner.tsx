import Container from "@/components/common/Container";
import { CATEGORY_BANNER_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface categoryBanners {
  name: string;
  image: string;
  slug: string;
}

const CategoryBanner = async () => {
  const categoryBanners: categoryBanners[] = await sanityFetch({
    query: CATEGORY_BANNER_QUERY,
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <Container classes="my-8 md:my-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-4">
        {categoryBanners.map((banner, index: number) => (
          <>
            <Link href={`/${banner.slug}`} key={index}>
              <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-slate-200 md:h-[600px]">
                <Image src={banner.image || ""} alt={banner.slug} fill={true} />
                <div className="absolute bottom-10 left-10 md:bottom-20">
                  <h2 className="mb-4 rounded-2xl p-2 text-white backdrop-blur-md">
                    {banner.name}
                  </h2>
                  <button className="bg-white/80 p-5 backdrop-blur-md">
                    Nakupovat
                  </button>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </Container>
  );
};

export default CategoryBanner;
