import { jewelry } from "@/data/jewelry";
import Link from "next/link";

interface sideNavRollDownProps {
  handleNavClose: () => void;
  rollDownStatus: boolean;
}

const SideNavRollDown: React.FC<sideNavRollDownProps> = ({
  handleNavClose,
  rollDownStatus,
}) => {

  return (
    <div
      className={`bg-slate-50 pt-2" + ${rollDownStatus ? "block" : "hidden"}`}
    >
      {jewelry.map((item, index) => (
        <Link
          key={index}
          href={"/"}
          className={""}
          onClick={handleNavClose}
        >
          <button className="pl-8 py-3 shadow-sm w-full flex">{item}</button>
        </Link>
      ))}
    </div>
  );
};

export default SideNavRollDown;
