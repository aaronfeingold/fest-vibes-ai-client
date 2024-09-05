import { animateScroll as scroll } from "react-scroll";
import { useCallback } from "react";

// Custom hook for smooth scrolling behavior
const useScroll = () => {
  // Scroll to events (or any target position)
  const scrollToEvents = useCallback(() => {
    scroll.scrollToBottom({
      duration: 250,
      smooth: "easeInOutQuad",
    });
  }, []);

  return { scrollToEvents };
};

export default useScroll;
