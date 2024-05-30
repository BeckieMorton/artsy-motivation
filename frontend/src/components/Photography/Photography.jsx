import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../ReuseableComponents/Button/Button";
import { DisplayArtworkCard } from "../ReuseableComponents/DisplayArtworkCard/DisplayArtworkCard";

import styles from "./Photography.module.css";

export const Photography = () => {
  const navigate = useNavigate();
  const [photographyIds, setPhotographyIds] = useState([]);
  const [artwork, setArtwork] = useState([]);

  //https://collectionapi.metmuseum.org/public/collection/v1/objects/55757
  //https://collectionapi.metmuseum.org/public/collection/v1/departments - see here for lists of departments

  //department ID for "Photographs" is 19

  const photoAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=19";

  //first fetch array of object ids from all european artworks
  useEffect(() => {
    const fetchPhotographyPaintings = async () => {
      try {
        const response = await fetch(photoAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setPhotographyIds(json.objectIDs);
      } catch (error) {
        console.log("Error fetching object id's for Asian Art", error);
      }
    };

    fetchPhotographyPaintings();
  }, []);

  const fetchArtInfo = async () => {
    //assign a random object from the asian objects  to randomId to display
    const randomId =
      photographyIds[Math.floor(Math.random() * photographyIds.length)];

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
      <h1>Photography</h1>

      <DisplayArtworkCard artwork={artwork} />
      <p>
        <Button handleClick={fetchArtInfo} buttonText={"Generate artwork"} />
      </p>
      <p>
        <Button handleClick={handleClick} buttonText={"Back"} />
      </p>
    </div>
  );
};
