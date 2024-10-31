// import s from "./Feedback.module.css";

const Feedback = ({ voteData }) => {
  return (
    <div>
      <ul>
        <li>Good:{voteData.good}</li>
        <li>Neutral:{voteData.neutral}</li>
        <li>Bad:{voteData.bad}</li>
      </ul>
    </div>
  );
};

const updateFeedback = (feedbackType) => {
  // Тут використовуй сеттер, щоб оновити стан
};

export default Feedback;
