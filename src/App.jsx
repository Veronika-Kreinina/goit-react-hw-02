import "./App.css";
import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [voteData, setVoteData] = useState({ good: 0, neutral: 0, bad: 0 });

  return (
    <>
      <Description />
      <Options voteData={voteData} setVoteData={setVoteData} />
      <Feedback voteData={voteData} />
    </>
  );
}

const totalFeedback = good + neutral + bad;
Math.round((good / totalFeedback) * 100);

export default App;
