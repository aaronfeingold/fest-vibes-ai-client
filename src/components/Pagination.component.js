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
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, "...");
      } else if (currentPage > totalPages - 2) {
        pages.push("...", totalPages - 1, totalPages);
      } else {
        pages.push("...", currentPage, "...");
      }
    }
    return pages;
  };

  return (
    <div className={`container-fluid ${styles.paginationComponent}`}>
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <button
              className={`btn btn-sm btn-outline-primary mx-1 ${styles.paginationButton}`}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                className={`btn btn-sm btn-outline-primary mx-1 ${styles.paginationButton}`}
                onClick={() => typeof page === "number" && onPageChange(page)}
                disabled={currentPage === page || page === "..."}
              >
                {page}
              </button>
            ))}

            <button
              className={`btn btn-sm btn-outline-primary mx-1 ${styles.paginationButton}`}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        <div className="col-12 col-sm-auto">
          <div className="d-flex justify-content-center">
            <div className="dropdown">
              <button
                className={`btn btn-sm btn-outline-secondary dropdown-toggle ${styles.perPageButton}`}
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Per Page
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
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
    </div>
  );
};

export default Pagination;
