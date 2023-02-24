import { forwardRef } from "react";

const MeetingImage = forwardRef((props, ref) => {
  const { imagePath, alt } = props;

  return (
    <img
      ref={ref}
      className="image h-96 w-80 object-cover object-center"
      src={imagePath}
      draggable="false"
      alt={alt}
    />
  );
});

export default MeetingImage;
