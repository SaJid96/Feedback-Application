import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {


    const [feedback, setFeedback] = useState([
      {
        id: 1,
        text: 'im just ',
        rating: 4,
      },
      {
        id: 2,
        text: 'im just trying ',
        rating: 5,
      },
      {
        id: 3,
        text: 'im just trying this man',
        rating: 6,
      },
    ]);


  const addedFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    setFeedback([newFeedback, ...feedback]);
  };

    const deleteFeedback = (id) => {
      if (window.confirm('Are you sure yo want to delte?')) {
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addedFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;