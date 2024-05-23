import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../ReuseableComponents/Button/Button";
import { DisplayArtworkCard } from "../ReuseableComponents/DisplayArtworkCard/DisplayArtworkCard";

import styles from "./GreekRoman.module.css";

export const GreekRoman = () => {
  const navigate = useNavigate();
  const [greekromanIds, setGreekromanIds] = useState([]);
  const [artwork, setArtwork] = useState([]);

  //https://collectionapi.metmuseum.org/public/collection/v1/objects/55757

  //department ID for "Greek and Roman Art" is 13

  const africanAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=13";

  //first fetch array of object ids from all european artworks
  useEffect(() => {
    const fetchGreekromanPaintings = async () => {
      try {
        const response = await fetch(africanAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setGreekromanIds(json.objectIDs);
      } catch (error) {
        console.log(
          "Error fetching object id's for Greek and Roman Art",
          error
        );
      }
    };

    fetchGreekromanPaintings();
  }, []);

  const fetchArtInfo = async () => {
    //assign a random object from the european objects  to randomId to display
    const randomId =
      greekromanIds[Math.floor(Math.random() * greekromanIds.length)];

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
      <h1>Greek and Roman Art</h1>
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
