import { scroller } from "react-scroll";
import { useCallback } from "react";

// Custom hook for smooth scrolling behavior
const useScroll = () => {
  // Scroll to artist events as a target
  const scrollToEvents = useCallback(() => {
    scroller.scrollTo("artistEventsContainer", {
      duration: 250,
      delay: 100,
      smooth: "easeInOutQuad",
      offset: -99,
    });
  }, []);

  return { scrollToEvents };
};

export default useScroll;
