// import s from "./Options.module.css";

const Options = ({ voteData, setVoteData }) => {
  const handleOnClick = (value) => {
    console.log(value);

    setVoteData((prev) => ({ ...prev, [value]: prev[value] + 1 }));
  };
  return (
    <div>
      {Object.keys(voteData).map((option) => (
        <button key={option} onClick={() => handleOnClick(option)}>
          {option}
        </button>
      ))}
      <button>reset</button>
    </div>
  );
};

export default Options;
