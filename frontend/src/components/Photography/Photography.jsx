import { Button } from "../ReuseableComponents/Button/Button";
import { useNavigate } from "react-router-dom";
export const Photography = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Photography - coming soon</h1>{" "}
      <Button handleClick={handleClick} buttonText={"Back"} />
    </div>
  );
};
