import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../ReuseableComponents/Button/Button";
import styles from "./African.module.css";

export const African = () => {
  const navigate = useNavigate();
  const [africanIds, setAfricanIds] = useState([]);
  const [artwork, setArtwork] = useState([]);
  const {
    title,
    artistDisplayName,
    primaryImage,
    medium,
    classification,
    department,
    objectName,
  } = artwork;

  //https://collectionapi.metmuseum.org/public/collection/v1/objects/55757

  //department ID for "Arts of Africa, Oceania, and the Americas" is 5

  const africanAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=5";

  //first fetch array of object ids from all european artworks
  useEffect(() => {
    const fetchAfricanPaintings = async () => {
      try {
        const response = await fetch(africanAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setAfricanIds(json.objectIDs);
      } catch (error) {
        console.log(
          "Error fetching object id's for Arts of Africa, Oceania, and the Americas",
          error
        );
      }
    };

    fetchAfricanPaintings();
  }, []);

  const fetchArtInfo = async () => {
    //assign a random object from the european objects  to randomId to display
    const randomId = africanIds[Math.floor(Math.random() * africanIds.length)];

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

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.artContainer}>
      <h1>Arts of Africa, Oceania, and the Americas</h1>
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
