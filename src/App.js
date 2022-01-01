import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import {useState} from 'react'
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {






  

  return (
    <FeedbackProvider>
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
                    <FeedbackForm  />
                    <FeedbackStats  />
                    <FeedBackList
                     
                     
                    />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
