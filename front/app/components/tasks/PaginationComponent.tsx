interface PaginationComponentProps {
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
}

const PaginationComponent = ({
  page,
  setPage,
  hasNextPage,
}: PaginationComponentProps) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="border px-3 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span>Page {page}</span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={!hasNextPage}
        className="border px-3 py-2 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
