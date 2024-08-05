import Container from "@/components/common/Container";

const BrandDescription = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-300 pt-8">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="mb-2 w-4/12">Diamond Solutions</h1>
          <p className="w-5/12 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quos
            doloribus rerum at laboriosam totam facilis cum similique deleniti,
            debitis molestiae minus, accusamus, fugiat earum repellat
            exercitationem unde sint architecto.
          </p>
        </div>
        <hr className="mb-12 mt-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
      </Container>
    </div>
  );
};

export default BrandDescription;
