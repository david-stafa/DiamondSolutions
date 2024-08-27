import Container from "../common/Container";
import ProductCard from "../common/productCard";

type Props = {
  data: products[];
};

const ProductList: React.FC<Props> = async ({ data }) => {
  return (
    <Container>
      <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mb-8 lg:gap-4 xl:grid-cols-4">
        {data.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
