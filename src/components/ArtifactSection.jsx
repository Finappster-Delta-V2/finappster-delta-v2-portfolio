export const ArtifactSection = ({
  children,
  title,
  videoUrl,
  imageUrl,
  imageAlt,
  side = "left",
}) => {
  let leftContent;
  let rightContent;

  let leftContentClass = "md:mr-24 md:w-1/2";
  let rightContentClass = "md:ml-24 md:w-1/2";

  if (side === "left") {
    if (videoUrl) {
      leftContent = (
        <video className={leftContentClass} preload="auto" loop autoPlay muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
      );
    }
    if (imageUrl) {
      leftContent = (
        <img className={leftContentClass} src={imageUrl} alt={imageAlt} />
      );
    }
  }

  if (side === "right") {
    if (videoUrl) {
      rightContent = (
        <video className={rightContentClass} preload="auto" loop autoPlay muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
      );
    }
    if (imageUrl) {
      rightContent = (
        <img className={rightContentClass} src={imageUrl} alt={imageAlt} />
      );
    }
  }

  return (
    <div className="flex flex-col items-end justify-between gap-12 md:flex-row">
      {leftContent}

      <div className={side === "left" ? "text-right" : "text-left"}>
        <h1 className="mb-5 text-4xl font-bold">{title}</h1>
        <p>{children}</p>
      </div>

      {rightContent}
    </div>
  );
};
