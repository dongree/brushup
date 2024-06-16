import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  pageNum: number;
  maxPageNum: number;
};

export default function Pagenation({ pageNum, maxPageNum }: Props) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={pageNum === 1 ? "#" : `?page=${pageNum - 1}`}
            className={`${pageNum === 1 ? "pointer-events-none text-gray-400" : ""}`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={pageNum === maxPageNum ? "#" : `?page=${pageNum + 1}`}
            className={`${pageNum === maxPageNum ? "pointer-events-none text-gray-400" : ""}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
