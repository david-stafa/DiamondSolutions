import Container from "@/components/common/Container";
import { MENU_PHOTOS_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";

interface menuPhotos {
  name: string;
  slug: string;
  subcategoryImage: string;
  categoryImage: string;
}

const JewelryCategoryLandingPage = async () => {
  const sperkyPhoto: menuPhotos[] = await client.fetch(MENU_PHOTOS_QUERY);

  console.log(sperkyPhoto);

  return (
    <Container>
      <h4 className="mb-4">Šperky podle kategorie: </h4>
      <div className="grid grid-cols-2 gap-4 rounded-2xl p-5 shadow-xl md:grid-cols-4">
        {sperkyPhoto.map((subcategory, index) => (
          <div key={index}>
            <h6 className="mb-4 text-center">{subcategory.name}</h6>
            <Link href={`/sperky/${subcategory.slug}`}>
              <div className="relative m-auto aspect-square w-full overflow-clip rounded-2xl">
                <Image
                  src={subcategory.subcategoryImage}
                  alt={subcategory.name}
                  fill={true}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default JewelryCategoryLandingPage;
