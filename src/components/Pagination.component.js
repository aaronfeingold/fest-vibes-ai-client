import React from "react";
import styles from "./Pagination.component.module.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onItemsPerPageChange,
  itemCount,
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
    <div className={`container-fluid ${styles.paginationComponent}`}>
      <div className="d-flex flex-wrap justify-content-center align-items-center m-2">
        <div className="d-flex flex-wrap justify-content-center align-items-center mb-2">
          <button
            className={`btn btn-outline-primary mx-1 ${styles.paginationButton}`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`btn btn-outline-primary mx-1 ${styles.paginationButton}`}
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={currentPage === page || page === "..."}
            >
              {page}
            </button>
          ))}

          <button
            className={`btn btn-outline-primary mx-1 ${styles.paginationButton}`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <div className="dropdown ms-2">
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
              {[6, 10, 20, 50, itemCount].map((num) => (
                <li key={num}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => onItemsPerPageChange(num)}
                  >
                    {num === itemCount ? "All" : num}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
