interface PaginationProps {
  total_tabs: number;
  page: number;
  handlePagination: (i: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

const Pagination = ({
  total_tabs,
  page,
  handleNext,
  handlePrev,
  handlePagination,
}: PaginationProps) => {
  return (
    <div className="pagination-container">
      <div className="prev-next" onClick={handlePrev}>
        prev
      </div>
      {[...Array(total_tabs).keys()].map((i) => (
        <div
          key={i}
          className={`pagination-button ${page === i ? "active" : ""}`}
          onClick={() => handlePagination(i)}
        >
          {i + 1}
        </div>
      ))}
      <div className="prev-next" onClick={handleNext}>
        next
      </div>
    </div>
  );
};

export default Pagination;
