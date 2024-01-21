import React from "react";
import { useState, useEffect } from "react";
import styles from "./DisplayArt.module.css";
import useArtworkStore from "../../stores/useArtworkStore";

//Art institute of Chicago free API
// get artwork info: https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id
//Find the base IIIF Image API endpoint in the config.iiif_url field
//https://www.artic.edu/iiif/2
//Append the image_id of the artwork as a segment to this URL
//EXAMPLE: https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg
//The example returns the image of "Starry Night and the Astronauts"

//RELEVANT data variables include:
//medium_display
//short_description
//artist_title
//department_title
//artwork_type_title

export const DisplayArt = () => {
  const { artwork, setArtwork } = useArtworkStore();
  const [loading, setLoading] = useState(true);
  const [infoDisplayed, setInfoDisplayed] = useState(false);

  const testAPI =
    "https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id,artist_title,short_description";

  const imageAPI =
    "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg";

  useEffect(() => {
    const fetchArtInfo = async () => {
      try {
        const response = await fetch(testAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setArtwork(json);
        console.log(artwork);
      } catch (error) {
        console.log("Error fetching art data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtInfo();
  }, [setArtwork, testAPI]);

  let title = "";
  let imageId = "";
  let info = "";
  let artist = "";

  if (artwork) {
    title = artwork?.data.title;
    imageId = artwork?.data.image_id;
    info = artwork?.data.short_description;
    artist = artwork?.data.artist_title;
    console.log(`inside artwork is:`, artwork);
  }

  return (
    <div className={styles.artContainer}>
      <p>
        <img alt={title} src={imageAPI} />
      </p>
      {title && <p>{title}</p>}
      {artist && <p>{artist}</p>}
      <button
        className="showInfo"
        onClick={() => setInfoDisplayed((is) => !is)}
      >
        Read more
      </button>
      {infoDisplayed && info && <p>{info}</p>}
    </div>
  );
};
