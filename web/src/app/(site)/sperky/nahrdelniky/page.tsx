import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY, SUB_CATEGORY_BANNER_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";

const Necklace = async () => {
  const subCategoryBanner = await sanityFetch({
    query: SUB_CATEGORY_BANNER_QUERY("nahrdelniky"),
    revalidate: 60,
  });
  const nahrdelniky: products[] = await sanityFetch({
    query: SPERKY_QUERY("nahrdelniky"),
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <div className="flex-grow">
      <MainProductImage
        source={subCategoryBanner.subcategoryBannerImageUrl}
        alt={subCategoryBanner.shortDescription}
        header={subCategoryBanner.subcategory}
      />

      <ProductList data={nahrdelniky} />
    </div>
  );
};

export default Necklace;
