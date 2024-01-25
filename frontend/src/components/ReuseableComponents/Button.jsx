export const Button = ({ buttonText, handleClick }) => {
  return (
    <button
      class="	border-2 border-red bg-white rounded-lg text-blue py-2 px-4 rounded m-2"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};
