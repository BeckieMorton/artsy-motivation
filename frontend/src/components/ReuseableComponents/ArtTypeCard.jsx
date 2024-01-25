export const ArtTypeCard = ({ cardText, handleClick, cardImage }) => {
  return (
    <div>
      <p>{cardText}</p>
      <img src={`./assets/${cardImage}.jpg`} />
    </div>
  );
};
