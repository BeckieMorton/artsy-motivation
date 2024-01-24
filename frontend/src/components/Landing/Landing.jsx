import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useArtworkStore from "../../stores/useArtworkStore";

import styles from "./Landing.module.css";

export const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/artworks");
  };

  return (
    <div>
      <p>Welcome</p>
      <p>
        <button onClick={handleClick}>Display artwork</button>
      </p>
    </div>
  );
};
