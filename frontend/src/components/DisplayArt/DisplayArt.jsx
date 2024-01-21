import React from "react";
import { useState, useEffect } from "react";
import styles from "./DisplayArt.module.css";
import useArtworkStore from "../../stores/useArtworkStore";

//Art institute of Chicago free API
// get artwork info: https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id
//Find the base IIIF Image API endpoint in the config.iiif_url field

// get all art info based on ID: https://api.artic.edu/api/v1/artworks/129884

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

//pagination.total_pages: 10321
//pagination.current_page: 10320
//RETURNS 12 ARTWORKS under data

export const DisplayArt = () => {
  const { artwork, setArtwork } = useArtworkStore();
  const [randomId, setRandomId] = useState("129884");
  const [infoDisplayed, setInfoDisplayed] = useState(false);
  const [pageNumber, setPageNumber] = useState("2");
  const [artArray, setArtArray] = useState([]);
  const [randomArtwork, setRandomArtwork] = useState([]);

  const onePageAPI = `https://api.artic.edu/api/v1/artworks?page=${pageNumber}`;

  const testAPI =
    "https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id,artist_title,short_description";

  const imageAPI =
    "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg";

  useEffect(() => {
    //get ALL artwork data and create an array with ALL valid ids
    const fetchArtInfo = async () => {
      try {
        const response = await fetch(onePageAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        console.log(json);
        setArtArray(json.data);
      } catch (error) {
        console.log("Error fetching art data:", error);
      } finally {
        console.log(`12 artworks are here:`, artArray);
        //randomly choose one of the 12 artworks in the array to display
        setRandomArtwork(artArray[Math.floor(Math.random() * artArray.length)]);
      }
    };

    fetchArtInfo();
  }, [setArtArray, onePageAPI]);

  let title = "";
  let imageId = "";
  let info = "";
  let artist = "";

  if (randomArtwork) {
    title = randomArtwork.title;
    console.log(title);
    imageId = randomArtwork.image_id;
    info = randomArtwork.short_description;
    artist = randomArtwork.artist_title;
  }

  return (
    <div className={styles.artContainer}>
      <p>
        <button>Generate New Artwork</button>
      </p>

      {title && <p>{title}</p>}
      {artist && <p>{artist}</p>}
      <p>
        <button
          className="showInfo"
          onClick={() => setInfoDisplayed((is) => !is)}
        >
          Read more
        </button>
      </p>

      {infoDisplayed && info && <p>{info}</p>}
    </div>
  );
};
