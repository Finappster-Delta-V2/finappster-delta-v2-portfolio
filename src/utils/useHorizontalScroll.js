const useHorizontalScroll = (ref) => {
  const handleOnDown = (e) => {
    ref.current.dataset.mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    ref.current.dataset.mouseDownAt = "0";
    ref.current.dataset.prevPercentage =
      ref.current.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (ref.current.dataset.mouseDownAt === "0") return;

    const mouseDelta =
      parseFloat(ref.current.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(ref.current.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    ref.current.dataset.percentage = nextPercentage;

    ref.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      {
        duration: 1200,
        fill: "forwards",
      }
    );

    const images = ref.current.querySelectorAll(".image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        {
          duration: 1200,
          fill: "forwards",
        }
      );
    }
  };

  return {
    handleOnDown,
    handleOnUp,
    handleOnMove,
  };
}

export default useHorizontalScroll;