import ReactPaginate from "react-paginate";

import cn from "classnames";

export function Pagination({
  pageCount,
  handlePageChange,
}: {
  pageCount: number;
  handlePageChange: (selected: { selected: number }) => void;
}) {
  return (
    <ReactPaginate
      className={cn(
        "h-full flex items-center bg-c-primary rounded-r-primary",
        "gap-[15px] py-[14px] sm:py-5 3xl:py-[25px] px-5 3xl:px-[25px]",
        "text-[15px] sm:text-lg 2xl:text-[25px] text-white leading-[120%]",
        "mx-auto sm:mx-0 mt-[10px] sm:mt-0"
      )}
      previousLabel={false}
      nextLabel={false}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={handlePageChange}
      containerClassName={"pagination"}
      activeClassName={cn(
        "flex items-center justify-center",
        "w-[32px] sm:w-9 h-[32px] sm:h-9 2xl:w-[50px] 2xl:h-[50px]",
        "rounded-[10px] border-2 border-[#7BE9A5] cursor-pointer bg-transparent"
      )}
      pageClassName={cn(
        "w-[30px] sm:w-10 h-[30px] sm:h-10 flex items-center justify-center",
        "rounded-[10px] bg-c-secondary cursor-pointer hover:shadow-[0px_3px_1px_#7BE9A5] duration-500"
      )}
    />
  );
}
