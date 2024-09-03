import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchArtistEvents } from "../services/ArtistEvents.service";
import ArtistEvents from "../containers/ArtistEvents.container";
import Spinner from "../components/Spinner.component";
import Header from "../components/Header.component";
import Navbar from "../components/Navbar.component";

const Home = () => {
  const dispatch = useDispatch();
  const { filterStatus, query, apiStatus } = useSelector(
    (state) => state.aes,
    shallowEqual
  );
  const scrollContainerRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    dispatch(fetchArtistEvents());
  }, [dispatch]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (event) => {
    if (scrollContainerRef.current) {
      const nextSection = scrollContainerRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="container-lg"
      onWheel={handleScroll}
      ref={scrollContainerRef}
    >
      <Navbar filterStatus={filterStatus} />
      <Header />
      {apiStatus === "loading" ? (
        <Spinner />
      ) : (
        <ArtistEvents
          filterStatus={filterStatus}
          query={query}
          apiStatus={query}
        />
      )}
    </div>
  );
};

export default Home;
