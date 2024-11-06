import s from "./Options.module.css";

const Options = ({
  feedback,
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) => {
  return (
    <div>
      {Object.keys(feedback).map((option) => (
        <button
          className={s.btn}
          key={option}
          onClick={() => updateFeedback(option)}
        >
          {option}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button className={s.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
