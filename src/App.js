import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import {useState} from 'react'
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {



  const [feedback, setFeedback] = useState(FeedbackData)



  const addedFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    setFeedback([newFeedback,...feedback]);
  };
  const deleteFeedback=(id)=>{

      if (window.confirm('Are you sure yo want to delte?')) {
        setFeedback(feedback.filter((item)=> item.id !== id))
      }

  }

  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addedFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedBackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink/>
      </div>
    </Router>
  );
}

export default App;
