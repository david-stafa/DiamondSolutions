import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  rollDownStatus: boolean;
}

const ArrowRightOrDown: React.FC<Props> = ({ rollDownStatus }) => {
  return (
    <span className="flex items-center">
      {rollDownStatus ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
    </span>
  );
};

export default ArrowRightOrDown;
