import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 3) {
      // Show all page numbers if totalPages <= 3
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Ellipses logic
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...");
      } else if (currentPage > totalPages - 3) {
        pages.push("...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...");
      }
    }
    return pages;
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        className={`btn btn-outline-primary mx-1`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          className={"btn btn-outline-primary mx-1"}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={currentPage === page || page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        className="btn btn-outline-primary mx-1"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Per Page
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => onItemsPerPageChange(6)}
            >
              6
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => onItemsPerPageChange(10)}
            >
              10
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => onItemsPerPageChange(20)}
            >
              20
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => onItemsPerPageChange(50)}
            >
              50
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => onItemsPerPageChange(100)}
            >
              All
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
