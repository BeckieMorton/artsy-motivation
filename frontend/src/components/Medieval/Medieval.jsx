import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../ReuseableComponents/Button/Button";
import { DisplayArtworkCard } from "../ReuseableComponents/DisplayArtworkCard/DisplayArtworkCard";

import styles from "./Medieval.module.css";

export const Medieval = () => {
  const navigate = useNavigate();
  const [medievalIds, setMedievalIds] = useState([]);
  const [artwork, setArtwork] = useState([]);

  //https://collectionapi.metmuseum.org/public/collection/v1/objects/55757
  //https://collectionapi.metmuseum.org/public/collection/v1/departments - see here for lists of departments

  //department ID for "Medieval Art" is 17

  const medievalAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=17";

  //first fetch array of object ids from all european artworks
  useEffect(() => {
    const fetchMedievalPaintings = async () => {
      try {
        const response = await fetch(medievalAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setMedievalIds(json.objectIDs);
      } catch (error) {
        console.log("Error fetching object id's for Medieval Art", error);
      }
    };

    fetchMedievalPaintings();
  }, []);

  const fetchArtInfo = async () => {
    //assign a random object from the medieval objects  to randomId to display
    const randomId =
      medievalIds[Math.floor(Math.random() * medievalIds.length)];

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
      <h1>Medieval Art</h1>

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
