import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import {useState} from 'react'
import FeedBackList from "./components/FeedBackList";
function App() {


  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <FeedBackList  feedback={feedback} />
        </div>
      </div>
    </>
  );
}

export default App;
