import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ReuseableComponents/Button";
import styles from "./MetDisplay.module.css";

export const MetDisplay = () => {
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState([]);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [artistBio, setArtistBio] = useState("");
  const [image, setImage] = useState("");
  const [classificationTitle, setClassificationTitle] = useState("");
  const [objectName, setObjectName] = useState("");
  const [departmentTitle, setDepartmentTitle] = useState("");
  const [medium, setMedium] = useState("testing baby");
  const randomArtworkId = Math.floor(Math.random() * 88000) + 1;

  const thisAPI = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomArtworkId}`;

  //https://collectionapi.metmuseum.org/public/collection/v1/objects/55757

  console.log(thisAPI);

  const maxRetries = 5;

  const fetchArtInfo = async () => {
    let retries = 0;
    let success = false;

    while (retries < maxRetries && !success) {
      const randomArtworkId = Math.floor(Math.random() * 90000) + 1;
      const thisAPI = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomArtworkId}`;
      const paintings = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=paint`;
      //modern art department id is 21

      //EXAMPLE URL: https://api.artic.edu/api/v1/artworks/129884?fields=id,title,artist_display,image_id,artwork_type_title,is_public_domain

      https: try {
        const response = await fetch(thisAPI);

        if (response.ok) {
          const json = await response.json();

          setArtwork(json);
          success = true; // Set the flag to true to exit the loop
          console.log(`object data here:`, json);
        } else {
          console.log(`Invalid response for artwork ID ${randomArtworkId}`);
        }
      } catch (error) {
        console.log("Error fetching art data:", error);
      }

      retries++;
    }

    if (!success) {
      console.log(
        `Max retries (${maxRetries}) reached. Unable to fetch valid data.`
      );
    }
  };

  useEffect(() => {
    setTitle(artwork.title);
    setArtist(artwork.artistDisplayName);
    setArtistBio(artwork.artistDisplayBio);
    setImage(artwork.primaryImage);
    setMedium(artwork.medium);
    setClassificationTitle(artwork.classification);
    setDepartmentTitle(artwork.department);
    setObjectName(artwork.objectName);
    console.log(artwork);
  }, [artwork]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-white overflow-hidden ">
      <h1 className="text-center mb-4 text-4xl leading-none tracking-tight text-blue-600 md:text-5xl p-3">
        Met Art API
      </h1>
      <p>
        <Button handleClick={fetchArtInfo} buttonText={"Generate artwork"} />
      </p>
      <p>
        <img src={image} alt={title} />
      </p>
      <p>title: {title}</p>
      <p>Artist: {artist}</p>
      <p>Medium: {medium}</p>
      <p>Classification: {classificationTitle}</p>
      <p>Department: {departmentTitle}</p>
      <p>Object name: {objectName}</p>
      <p>
        <Button handleClick={handleClick} buttonText={"Back"} />
      </p>
    </div>
  );
};
