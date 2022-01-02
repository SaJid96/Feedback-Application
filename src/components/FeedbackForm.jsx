import { useState,useContext,useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';








const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);

  const [btndisabled, setBtndisabled] = useState(true);
  const [message, setMessage] = useState('');


  const { addedFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);


  useEffect(()=>{

     if (feedbackEdit.edit) {
       setBtndisabled(false);
       setText(feedbackEdit.item.text);
       setRating(feedbackEdit.item.rating);
     }

  },[feedbackEdit])

  const handleText = (e) => {
    if (text === '') {
      setBtndisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtndisabled(true);
      setMessage('Text must be atleast 10 characters');
    } else {
      setMessage(null);
      setBtndisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }
      else{
      addedFeedback(newFeedback);

      }
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleText}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btndisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
