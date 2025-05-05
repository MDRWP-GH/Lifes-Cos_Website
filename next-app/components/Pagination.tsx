"use client";
import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-1 mt-8 flex-wrap">
      {pageNumbers.map((page) => (
        <Link key={page} href={`${basePath}/${page}`}>
          <button
            className={`px-4 py-2 border rounded-md ${
              page === currentPage
                ? "bg-black text-white"
                : "bg-gray-800 text-white hover:bg-gray-600"
            }`}
          >
            {page}
          </button>
        </Link>
      ))}
    </div>
  );
}
