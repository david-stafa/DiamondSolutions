const NewJewelry = () => {
  const numJewelry = 4;

  return (
    <div className="m-auto max-w-7xl">
      <h4 className="my-8">Novinky: </h4>
      <div className="flex justify-between">
        {Array.from({ length: numJewelry }).map((_, index) => (
          <div key={index}>
            <div className="flex h-72 w-72 items-center justify-center rounded-3xl bg-slate-200">
              <h6>Image of new Jewelry</h6>
            </div>
            <h6 className="mt-2 pl-2">Queen diamond ring</h6>
            <p className="mt-1 pl-2">Price: 10 000 Kč</p>
          </div>
        ))}
      </div>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
    </div>
  );
};

export default NewJewelry;
