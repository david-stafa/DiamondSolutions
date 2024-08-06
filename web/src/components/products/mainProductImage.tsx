import Image from "next/image";
import Container from "../common/Container";

interface Props {
  source: string;
  alt: string;
}

const MainProductImage: React.FC<Props> = ({ source, alt }) => {
  return (
    <Container>
      <div className="relative mt-8 flex h-screen max-h-[45vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-200">
        <Image src={source} alt={alt} fill={true} />
      </div>
    </Container>
  );
};

export default MainProductImage;
