import Image from "next/image";
import Link from "next/link";
import { Dispatch, RefObject, SetStateAction } from "react";

const SearchResults = ({
  products,
  inputRef,
  setShowSearch,
  query,
  isLoading,
  error,
}: {
  products: products[];
  index?: number;
  inputRef: RefObject<HTMLInputElement>;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
  query: string;
  isLoading: boolean;
  error: string | null;
}) => {
  const closeNav = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setShowSearch(false);
  };
  return (
    <div className="absolute left-0 top-[57.5px] z-50 w-screen bg-white md:left-auto md:top-[51px] md:w-80 md:rounded-2xl md:border md:border-slate-200">
      {/* ERROR HANDLING */}
      {isLoading ? (
        <div className="flex h-16 items-center justify-center p-2">
          Načítám...
        </div>
      ) : error ? (
        <div className="flex h-16 items-center justify-center p-2 text-red-500">
          {error}
        </div>
      ) : products.length == 0 ? (
        <div className="flex h-16 items-center justify-center p-2">
          Nic nenalezeno...
        </div>
      ) : (
        // PRODUCTS
        <>
          {products.map((product) => (
            <div
              className="flex items-center gap-1 rounded-2xl border-b p-2 last:border-none hover:bg-slate-200"
              key={product.slug}
              onClick={closeNav}
            >
              <div className="relative h-12 w-12 overflow-clip rounded-xl">
                <Link href={`/produkt/${product.slug}`}>
                  <Image
                    src={product.mainImage}
                    alt={product.shortDescription}
                    fill={true}
                  />
                </Link>
              </div>

              <Link
                href={`/produkt/${product.slug}`}
                className="flex h-12 grow items-center"
              >
                <p>{product.name}</p>
              </Link>
            </div>
          ))}
          {/* LOAD ONLY 6 PRODUCTS - IF 7 LINK TO MORE PRODUCTS */}
          {products[0].totalCount >= 7 && (
            <div
              className="h-14 w-full rounded-2xl p-2 hover:bg-slate-200"
              onClick={closeNav}
              key={products[0].slug}
            >
              <Link
                href={`/vyhledavani?query=${query}`}
                className="flex h-full w-full items-center justify-center text-center"
              >
                Více produktů...
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
