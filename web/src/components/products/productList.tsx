import { numberWithDecimals } from "@/helpers/numberwdecimals";
import Image from "next/image";
import Container from "../common/Container";

type Props = {
  data: products[];
};

const ProductList: React.FC<Props> = async ({ data }) => {
  return (
    <Container>
      <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data.map((product, index) => (
          <div
            key={index}
            className="rounded-2xl border border-t-0 border-slate-200"
          >
            <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-slate-200">
              <Image
                fill={true}
                src={product.imageUrl}
                alt={product.shortDescription}
                className="transition ease-in-out hover:scale-110"
              />
            </div>
            <h6 className="mt-3 pl-2">{product.name}</h6>
            <p className="mb-3 pl-2">{numberWithDecimals(product.price)} Kč</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
