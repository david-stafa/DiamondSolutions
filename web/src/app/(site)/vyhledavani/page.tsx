import ProductList from "@/components/products/productList";
import { SEARCH_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";

const SearchedProducts = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { query } = searchParams;
  const results: products[] = await sanityFetch({
    query: SEARCH_QUERY(query),
  });

  return (
    <>
      <h2 className="p-5">Výsledky:</h2>
      <ProductList data={results} />
    </>
  );
};

export default SearchedProducts;
