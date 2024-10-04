import { numberWithDecimals } from "@/helpers/numberwdecimals";
import Link from "next/link";

const ProductDescription = ({
  name,
  price,
  salePrice,
  longDescription,
}: {
  name: string;
  price: number;
  salePrice: number;
  longDescription: string;
}) => {
  return (
    <div className="h-auto w-full self-start lg:sticky lg:top-0 lg:w-[440px] lg:max-w-[440px]">
      <div className="mb-4 mt-5 flex h-fit justify-between">
        <h3 className="flex w-fit items-end">{name}</h3>
        <div className="mt-auto flex h-full flex-col flex-wrap">
          {salePrice ? (
            <>
              {" "}
              <div className="ml-auto h-1/2 w-fit text-nowrap text-gray-500 line-through">
                {numberWithDecimals(price)} Kč
              </div>
              <div className="ml-auto h-1/2 w-fit text-nowrap text-lg">
                {numberWithDecimals(salePrice)} Kč
              </div>
            </>
          ) : (
            <div className="ml-auto h-1/2 w-fit text-nowrap text-lg">
              {numberWithDecimals(price)} Kč
            </div>
          )}
        </div>
      </div>
      <hr className="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
      <p className="mb-4 break-words">{longDescription}</p>
      <Link href="/kontakt">
        <button className="h-12 w-full rounded-2xl bg-slate-200">
          Kontaktujte nás
        </button>
      </Link>
    </div>
  );
};

export default ProductDescription;
