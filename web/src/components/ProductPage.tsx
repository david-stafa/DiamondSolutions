const ProductPage = () => {
  return (
    <div className="m-auto my-8 flex w-full max-w-7xl flex-1">
      <div className="flex max-w-[calc(100%-440px)] flex-col gap-1 pr-12">
        <div className="h-screen max-h-[31rem] bg-slate-200"></div>
        <div className="fled-col flex gap-1">
          <div className="h-32 w-56 bg-slate-200"></div>
          <div className="h-32 w-56 bg-slate-200"></div>
          <div className="h-32 w-56 bg-slate-200"></div>
          <div className="h-32 w-56 bg-slate-200"></div>
          <div className="h-32 w-56 bg-slate-200"></div>
        </div>
      </div>
      <div className="h-auto w-[440px] max-w-[440px]">
        <div className="mb-4 flex justify-between">
          <h4 className="">Sperky moc hezky</h4>
          <h6 className="flex items-end">2000 Kč</h6>
        </div>
        <hr className="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos
          enim debitis reprehenderit, praesentium nihil voluptas omnis neque at
          voluptatibus quisquam adipisci hic laudantium! Esse at accusantium
          earum tempora architecto?
        </p>
        <button className="h-12 w-full rounded-2xl bg-slate-200">
          Kontaktujte nás
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
