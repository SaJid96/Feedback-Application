import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import {useState} from 'react'
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


function App() {


  const [feedback, setFeedback] = useState(FeedbackData)


  const deleteFeedback=(id)=>{

      if (window.confirm('Are you sure yo want to delte?')) {
        setFeedback(feedback.filter((item)=> item.id !== id))
      }

  }

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <FeedbackForm/>
          <FeedbackStats feedback={feedback} />
          <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
      </div>
    </>
  );
}

export default App;
