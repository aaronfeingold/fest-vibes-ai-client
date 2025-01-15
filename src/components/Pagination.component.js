import React from "react";
import PropTypes from 'prop-types';
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
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if totalPages is less than or equal to maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If currentPage is near the beginning, show the first few pages and "..."
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5, '...');
      }
      // If currentPage is near the end, show the last few pages and "..."
      else if (currentPage >= totalPages - 2) {
        pages.push(
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      }
      // For other cases, show currentPage +/- 2, with "..." on both sides
      else {
        pages.push(
          '...',
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          '...'
        );
      }
    }
    return pages;
  };

  return (
    <div className={`container-fluid ${styles.paginationComponent}`}>
      <div className="row justify-content-center align-items-center g-z">
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
                onClick={() => typeof page === 'number' && onPageChange(page)}
                disabled={currentPage === page || page === '...'}
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
        <div
          className={`col-12 col-sm-auto my-1 my-sm-2 ${styles.paginationDropdown}`}
        >
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
                {[6, 10, 20, 50].map((num) => (
                  <li key={num}>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => onItemsPerPageChange(this.innertext)}
                    >
                      {num}
                    </button>
                  </li>
                ))}
                <li key={`itemCount-${itemCount}`}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => onItemsPerPageChange(itemCount)}
                  >
                    All
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onItemsPerPageChange: PropTypes.func,
  itemCount: PropTypes.number,
};

export default Pagination;
