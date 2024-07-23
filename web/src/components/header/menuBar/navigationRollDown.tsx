import { jewelry } from "@/data/jewelry";
import Link from "next/link";

interface Props {
  rollDownStatus: boolean;
  rollDownOpen: () => void;
  rollDownClose: () => void;
}

const NavigationRollDown: React.FC<Props> = ({ ...props }) => {
  return (
    <div
      className={`flex justify-around w-screen px-6 mx-auto z-10 absolute bg-white shadow-md border ${
        props.rollDownStatus === false ? "hidden" : ""
      }`}
      onMouseEnter={props.rollDownOpen}
      onMouseLeave={() => setTimeout(props.rollDownClose, 500)}
    >
      {jewelry.slice(1).map((item, index) => (
        // TODO FINISH NAVIGATION
        <Link href={"/"} key={index}>
          <p className="h-12 flex items-center">{item}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavigationRollDown;
