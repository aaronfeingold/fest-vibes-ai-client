import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterStatus, updateQuery } from "../../slices/ArtistEvents.slice";
import styles from "./Searcher.card.module.css";
import useScroll from "../../hooks/useScroll";

const Searcher = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); // State to manage the search term
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [hasClicked, setHasClicked] = useState(false);
  const { scrollToEvents } = useScroll();

  // Update debounced term after a delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300); // 300ms debounce delay

    // Cleanup the timeout on component unmount or on searchTerm change
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Update Redux store based on debounced term
  useEffect(() => {
    if (debouncedTerm) {
      dispatch(setFilterStatus(true));
      dispatch(updateQuery(debouncedTerm));
    } else {
      dispatch(setFilterStatus(false));
      dispatch(updateQuery(""));
    }
  }, [debouncedTerm, dispatch]);

  // Handle input change
  const handleQuery = (e) => {
    setSearchTerm(e.target.value);
  };
  // Handle click on the search input
  const handleSearchClick = () => {
    if (!hasClicked) {
      scrollToEvents(); // Scroll to events when search input is clicked for the first time
      setHasClicked(true); // Mark that the search input has been clicked
    }
  };

  return (
    <div className="container-sm">
      <div className="row justify-content-center">
        <div
          className={`input-group ${styles.inputGroup}`}
          style={{ width: "30rem" }}
        >
          <input
            type="text"
            className={`form-control ${styles.formControl}`}
            placeholder="Search by artist name"
            aria-label="Search by artist name"
            onChange={handleQuery}
            onClick={handleSearchClick}
            value={searchTerm}
          />
          <button
            className={`btn btn-outline-secondary ${styles.btnOutlineSecondary}`}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searcher;
