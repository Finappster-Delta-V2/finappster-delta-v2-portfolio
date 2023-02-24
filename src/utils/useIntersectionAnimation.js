import { useEffect } from "react";

const useIntersectionAnimation = (refs, animations, stagger) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          refs.current.map((logRef, index) => {
            stagger === 0 ? logRef.classList.add(animations[index]) :
              setTimeout(() => {
                logRef.classList.add(animations[index]);
              }, index * stagger);
          });
        } else {
          refs.current.map((logRef, index) => {
            logRef.classList.remove(animations[index]);
          })
        }
      });
    });

    refs.current.map((logRef) => {
      observer.observe(logRef);
    });

    // Clean up function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
}

export default useIntersectionAnimation;