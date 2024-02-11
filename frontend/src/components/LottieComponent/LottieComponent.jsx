import Lottie from "lottie-react";
import loadinganimation from "../../../public/assets/animations/loadinganimation.json";

import styles from "./LottieComponent.module.css";

export const LottieComponent = () => {
  const style = {
    height: 200,
  };

  return (
    <div className={styles.animationContainer}>
      <Lottie animationData={loadinganimation} style={style} />
    </div>
  );
};
