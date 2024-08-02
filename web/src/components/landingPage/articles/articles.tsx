const Articles = () => {
  const numArticles = 3;
  return (
    <div className="m-auto max-w-7xl">
      <h4 className="my-8">Články: </h4>
      <div className="mb-12 flex flex-grow flex-wrap justify-between">
        {Array.from({ length: numArticles }).map((_, index) => (
          <div className="mx-1" key={index}>
            <div className="flex h-52 w-[24rem] items-center justify-center rounded-2xl bg-slate-200">
              <h6>Článek</h6>
            </div>
            <h6 className="mt-4 w-96">
              Jak si vybrat správnou velikost prstenu?
            </h6>
            <p className="mt-2 w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus iusto aliquid nemo inventore reprehenderit at illo
              dicta sint suscipit! Cumque saepe reiciendis, impedit hic deleniti
              perferendis? Obcaecati natus quasi temporibus?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
