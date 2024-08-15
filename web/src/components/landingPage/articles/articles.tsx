import Container from "@/components/common/Container";

const Articles = () => {
  const numArticles = 3;
  return (
    <Container>
      <hr className="my-12 mb-9 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
      <h4 className="mb-4">Články: </h4>
      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: numArticles }).map((_, index) => (
          <div className="w-full" key={index}>
            <div className="h-52 w-full rounded-2xl bg-slate-200">
              <h6>Článek</h6>
            </div>
            <h6 className="mt-4 w-full">
              Jak si vybrat správnou velikost prstenu?
            </h6>
            <p className="mt-2 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus iusto aliquid nemo inventore reprehenderit at illo
              dicta sint suscipit! Cumque saepe reiciendis, impedit hic deleniti
              perferendis? Obcaecati natus quasi temporibus?
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Articles;
