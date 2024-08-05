import Container from "@/components/common/Container";

const NewJewelry = () => {
  const numJewelry = 4;

  return (
    <Container>
      <h4 className="my-8">Novinky: </h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: numJewelry }).map((_, index) => (
          <div key={index}>
            <div className="flex h-72 w-full items-center justify-center rounded-2xl bg-slate-200">
              <h6>Image of new Jewelry</h6>
            </div>
            <h6 className="mt-2 pl-2">Queen diamond ring</h6>
            <p className="mt-1 pl-2">Price: 10 000 Kč</p>
          </div>
        ))}
      </div>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
    </Container>
  );
};

export default NewJewelry;
