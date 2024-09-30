import Image from "next/image";
import Container from "../common/Container";

interface Props {
  source: string;
  alt: string;
  // Title of a category or subcategory
  header: string;
}

const MainProductImage: React.FC<Props> = ({ source, alt, header }) => {

  return (
    <Container>
      <div className="relative my-2 flex h-screen max-h-[30vh] w-full overflow-hidden rounded-2xl md:my-4 lg:max-h-[450px]">
        <Image src={source} alt={alt} fill={true} priority={true} />
        <h2 className="absolute bottom-5 p-1 md:bottom-10 left-5 rounded-2xl md:p-4 md:text-7xl text-white backdrop-blur-md">
          {header}
        </h2>
      </div>
    </Container>
  );
};

export default MainProductImage;
