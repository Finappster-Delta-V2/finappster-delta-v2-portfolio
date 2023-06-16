export const ArtifactSection = ({
  children,
  title,
  videoUrl,
  imageUrl,
  imageAlt,
  side = "left",
}) => {
  return (
    <div className="flex items-end justify-between">
      {videoUrl && side === "left" && (
        <video className="mr-24 w-1/2" preload="auto" loop autoPlay muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {imageUrl && side === "left" && (
        <img className="mr-24 w-1/2" src={imageUrl} alt={imageAlt} />
      )}

      <div className={side === "left" ? "text-right" : "text-left"}>
        <h1 className="mb-5 text-4xl font-bold">{title}</h1>
        <p>{children}</p>
      </div>

      {videoUrl && side === "right" && (
        <video className="ml-24 w-1/2" preload="auto" loop autoPlay muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {imageUrl && side === "right" && (
        <img className="ml-24 w-1/2" src={imageUrl} alt={imageAlt} />
      )}
    </div>
  );
};
