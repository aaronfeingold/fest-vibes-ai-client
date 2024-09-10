import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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

  const pageButton = {
    minWidth: "40px",
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        className={`btn btn-outline-primary mx-1 ${pageButton}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          className={`btn btn-outline-primary mx-1 ${pageButton}`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={currentPage === page || page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        className={`btn btn-outline-primary mx-1 ${pageButton}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
