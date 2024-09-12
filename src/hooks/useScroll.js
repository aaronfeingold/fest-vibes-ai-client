import { scroller } from "react-scroll";
import { useCallback } from "react";

// Custom hook for smooth scrolling behavior
const useScroll = () => {
  // Scroll to artist events as a target
  const scrollToEvents = useCallback(function eventHandler() {
    scroller.scrollTo("artistEventsContainer", {
      duration: 250,
      smooth: "easeInOutQuad",
      offset: -99,
    });
  }, []);

  return { scrollToEvents };
};

export default useScroll;
