const MeetingImage = (props) => {
  const { imagePath, alt } = props;

  return (
    <img
      className="image h-96 w-80 object-cover object-center"
      src={imagePath}
      draggable="false"
      alt={alt}
    />
  );
};

export default MeetingImage;
