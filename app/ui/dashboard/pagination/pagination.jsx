const Pagination = () => {
  return (
    <div className="flex justify-between mt-3">
      <button
        className="py-1 px-3 cursor-not-allowed text-sm bg-clrTextSoft text-black"
        disabled
      >
        Previous
      </button>
      <button className="py-1 px-3 cursor-pointer text-sm bg-clrText text-black">
        Next
      </button>
    </div>
  );
};

export default Pagination;
