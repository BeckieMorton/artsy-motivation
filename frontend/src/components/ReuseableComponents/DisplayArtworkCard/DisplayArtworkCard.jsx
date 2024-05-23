import styles from "./DisplayArtworkCard.module.css";

export const DisplayArtworkCard = ({ artwork }) => {
  const {
    title,
    artistDisplayName,
    primaryImage,
    medium,
    classification,
    department,
    objectName,
  } = artwork;
  return (
    <div>
      <p>
        {primaryImage && (
          <img className={styles.artImage} src={primaryImage} alt={title} />
        )}
      </p>

      <p>title: {title}</p>
      <p>Artist: {artistDisplayName}</p>
      <p>Medium: {medium}</p>
      <p>Classification: {classification}</p>
      <p>Department: {department}</p>
      <p>Object name: {objectName}</p>
    </div>
  );
};
