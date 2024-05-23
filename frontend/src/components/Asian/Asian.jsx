import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../ReuseableComponents/Button/Button";
import { DisplayArtworkCard } from "../ReuseableComponents/DisplayArtworkCard/DisplayArtworkCard";

import styles from "./Asian.module.css";

export const Asian = () => {
  const navigate = useNavigate();
  const [asianIds, setAsianIds] = useState([]);
  const [artwork, setArtwork] = useState([]);

  //https://collectionapi.metmuseum.org/public/collection/v1/objects/55757
  //https://collectionapi.metmuseum.org/public/collection/v1/departments - see here for lists of departments

  //department ID for "Asian Art" is 6

  const africanAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=6";

  //first fetch array of object ids from all european artworks
  useEffect(() => {
    const fetchAsianPaintings = async () => {
      try {
        const response = await fetch(africanAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setAsianIds(json.objectIDs);
      } catch (error) {
        console.log("Error fetching object id's for Asian Art", error);
      }
    };

    fetchAsianPaintings();
  }, []);

  const fetchArtInfo = async () => {
    //assign a random object from the european objects  to randomId to display
    const randomId = asianIds[Math.floor(Math.random() * asianIds.length)];

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
      <h1>Asian Art</h1>
      <p>
        <Button handleClick={fetchArtInfo} buttonText={"Generate artwork"} />
      </p>
      <DisplayArtworkCard artwork={artwork} />
      <p>
        <Button handleClick={handleClick} buttonText={"Back"} />
      </p>
    </div>
  );
};
