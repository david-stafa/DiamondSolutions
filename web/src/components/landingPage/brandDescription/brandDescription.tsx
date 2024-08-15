import Container from "@/components/common/Container";

const BrandDescription = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-300 pt-8">
      <Container>
        {/* <div className="flex items-center justify-between"> */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h1 className="my-auto flex-grow mb-4">Diamond Solutions</h1>
          <p className="w-full text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quos
            doloribus rerum at laboriosam totam facilis cum similique deleniti,
            debitis molestiae minus, accusamus, fugiat earum repellat
            exercitationem unde sint architecto.
          </p>
        </div>
        <hr className="mb-8 mt-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
      </Container>
    </div>
  );
};

export default BrandDescription;
