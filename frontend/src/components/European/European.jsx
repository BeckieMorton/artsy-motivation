import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../ReuseableComponents/Button/Button";
import styles from "./European.module.css";

export const European = () => {
  const navigate = useNavigate();
  const [europeanIds, setEuropeanIds] = useState([]);
  const [artwork, setArtwork] = useState([]);
  // const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [artistBio, setArtistBio] = useState("");
  const [image, setImage] = useState("");
  const [classificationTitle, setClassificationTitle] = useState("");
  // const [objectName, setObjectName] = useState("");
  const [departmentTitle, setDepartmentTitle] = useState("");
  // const [medium, setMedium] = useState("testing baby");
  const {
    title,
    artistDisplayName,
    artistDisplayBio,
    primaryImage,
    medium,
    classification,
    department,
    objectName,
  } = artwork;

  //https://collectionapi.metmuseum.org/public/collection/v1/objects/55757

  //department ID for "European Paintings is 11
  const europeanAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11";

  //first fetch array of object ids from all european artworks
  useEffect(() => {
    const fetchEuropeanPaintings = async () => {
      try {
        const response = await fetch(europeanAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setEuropeanIds(json.objectIDs);
      } catch (error) {
        console.log("Error fetching object id's for European Paintings", error);
      }
    };

    fetchEuropeanPaintings();
  }, []);

  const fetchArtInfo = async () => {
    //assign a random object from the european objects  to randomId to display
    const randomId =
      europeanIds[Math.floor(Math.random() * europeanIds.length)];

    console.log(`random id:`, randomId);
    const onePaintingApi = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`;

    try {
      const response = await fetch(onePaintingApi);

      if (response.ok) {
        const json = await response.json();
        setArtwork(json);
        console.log(`object data here:`, json);
      } else {
        console.log(`Invalid response for artwork ID ${randomId}`);
      }
    } catch (error) {
      console.log("Error fetching art data:", error);
    }
  };

  // useEffect(() => {
  //   setTitle(artwork.title);
  //   setArtist(artwork.artistDisplayName);
  //   setArtistBio(artwork.artistDisplayBio);
  //   setImage(artwork.primaryImage);
  //   setMedium(artwork.medium);
  //   setClassificationTitle(artwork.classification);
  //   setDepartmentTitle(artwork.department);
  //   setObjectName(artwork.objectName);
  //   console.log(artwork);
  // }, [artwork]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.artContainer}>
      <h1>European Paintings</h1>
      <p>
        <Button handleClick={fetchArtInfo} buttonText={"Generate artwork"} />
      </p>
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
      <p>
        <Button handleClick={handleClick} buttonText={"Back"} />
      </p>
    </div>
  );
};
