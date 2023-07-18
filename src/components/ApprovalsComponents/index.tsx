import { CareBlock, Table } from "./components";

import { NavigationComponent } from "../NavigationComponent";

import { routes } from "App";

import { Pagination } from "UI";

import cn from "classnames";
import { usePagination } from "hooks/usePagination";
import { useGetApprovals } from "query/useGetApprovals";
import { NotData } from "UI/NotData";

export function ApprovalsComponents({ className }: { className?: string }) {
  const { items, pageCount, handlePageChange } = usePagination(useGetApprovals);

  return (
    <section
      className={cn(
        "w-full h-full flex-1 flex flex-col",
        "relative overflow-x-hidden sm:pb-0",
        className
      )}
    >
      <CareBlock className="flex mt-9 mr-[22px] sm:hidden" />
      <div className="w-full overflow-x-scroll sm:overflow-x-hidden flex-1">
        {items ? (
          <Table
            currentTokens={items}
            className="w-auto min-w-max mt-5 sm:mt-0"
          />
        ) : (
          <NotData data={items} />
        )}
      </div>
      <div
        className={cn(
          "mt-auto sm:mt-[-10px] 3xl:mt-auto",
          "w-full flex justify-between items-center pt-2 -mt-2 gap-4 2xl:gap-0",
          "shadow-[0px_-15px_15px_#242529] bg-c-secondary"
        )}
      >
        <NavigationComponent
          activePage={routes.Approvals.title}
          className="sm:mt-auto"
        />
        <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
        <CareBlock className="hidden sm:flex" />
      </div>
    </section>
  );
}
