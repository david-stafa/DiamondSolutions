import Container from "@/components/common/Container";

const Articles = () => {
  const numArticles = 3;
  return (
    <Container>
      <h4 className="my-8">Články: </h4>
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: numArticles }).map((_, index) => (
          <div className="mx-1 w-full" key={index}>
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
