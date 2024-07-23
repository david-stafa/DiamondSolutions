export default function Sperky() {
  const numJewelry = 24;

  return (
    <div className="m-auto max-w-7xl px-4 xl:px-0">
      <div className="mt-8 flex h-screen max-h-[25vh] w-full items-center justify-center rounded-3xl bg-slate-200">
        <h6>SPERKY</h6>
      </div>

      <div className="my-8 flex h-16 w-full rounded-3xl bg-slate-200 px-8">
        <div className="flex items-center justify-center px-4">Cena</div>
        <div className="flex items-center justify-center px-4">Velikost</div>
        <div className="flex items-center justify-center px-4 ml-auto">Filtr</div>
      </div>

      <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: numJewelry }).map((_, index) => (
          <div
            key={index}
            className="rounded-3xl border border-t-0 border-slate-200"
          >
            <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl bg-slate-200">
              <h6 className="transition ease-in-out hover:scale-110">
                Image of sperky
              </h6>
            </div>
            <h6 className="mt-2 pl-3">Angels ring</h6>
            <p className="mb-2 pl-3">Cena: 10 000 Kč</p>
          </div>
        ))}
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
}
