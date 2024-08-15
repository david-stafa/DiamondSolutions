import Image from "next/image";
import Container from "../common/Container";

interface Props {
  source: string;
  alt: string;
}

const MainProductImage: React.FC<Props> = ({ source, alt }) => {
  return (
    <Container>
      <div className="relative my-4 md:my-8 flex h-screen max-h-[35vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-200 lg:max-h-[45vh]">
        <Image src={source} alt={alt} fill={true} />
      </div>
    </Container>
  );
};

export default MainProductImage;
