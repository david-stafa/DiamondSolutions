import Container from "@/components/common/Container";
import { CATEGORY_BANNER_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";

interface categoryBanners {
  name: string;
  image: string;
  slug: string;
}

const CategoryBanner = async () => {
  const categoryBanners: categoryBanners[] = await client.fetch(
    CATEGORY_BANNER_QUERY,
  );

  console.log("AHOJ")
  console.log(categoryBanners)

  return (
    <Container classes="my-8 md:my-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-4">
        {categoryBanners.map((banner, index: number) => (
          <Link href={`/${banner.slug}`} key={index}>
            <div className="h-96 w-full bg-slate-200 md:h-[600px] relative rounded-2xl overflow-hidden">
              <Image src={banner.image || ''} alt={banner.slug} fill={true} />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default CategoryBanner;
