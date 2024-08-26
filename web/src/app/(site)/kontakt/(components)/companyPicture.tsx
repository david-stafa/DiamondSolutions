import Image from "next/image";

const CompanyPicture = () => {
  return (
    <div className="hidden h-[450px] w-full rounded-2xl md:block lg:h-[600px] relative overflow-hidden">
      <Image src={"/contactImage.jpg"} alt="" fill={true} />
    </div>
  );
};

export default CompanyPicture;
