import { scroller } from "react-scroll";
import { useCallback } from "react";

// Custom hook for smooth scrolling behavior
const useScroll = () => {
  // Scroll to artist events as a target
  const scrollToEvents = useCallback(function eventHandler() {
    scroller.scrollTo("artistEventsContainer", {
      duration: 250,
      smooth: "easeInOutQuad",
      offset: -150,
    });
  }, []);

  // Scroll to artist events as a target
  const scrollToHome = useCallback(function eventHandler() {
    scroller.scrollTo("homeContainer", {
      duration: 100,
      smooth: "easeInOutQuint",
    });
  }, []);

  return { scrollToEvents, scrollToHome };
};

export default useScroll;
