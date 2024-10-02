interface BadgeProps {
  isNew: boolean;
  sale: boolean;
}

const Badge = ({ isNew, sale }: BadgeProps) => {
  return (
    <div className="absolute left-2 top-2 z-10 flex w-20 flex-col gap-1 text-sm md:text-base">
      {isNew && (
        <span className="z-50 rounded-2xl bg-gradient-to-r from-[#A1C4FD] to-[#C2E9FB] px-2 py-[2px] text-center">
          Novinka
        </span>
      )}
      {sale && (
        <span className="z-50 rounded-2xl bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] px-2 py-[2px] text-center">
          Sleva
        </span>
      )}
    </div>
  );
};

export default Badge;
