import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card"

const FeedbackForm = () => {

    const [text,setText]=useState('')
    const [btndisabled, setBtndisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleText=(e)=>{


        if (text === '') {
            setBtndisabled(true)
            setMessage(null)            
        }
        else if(text !== '' && text.trim().length<=10){
            setBtndisabled(true)
            setMessage('Text must be atleast 10 characters')
        }
        else{
            setMessage(null)
            setBtndisabled(false)
        }

        setText(e.target.value);
    }

    return (
      <Card>
        <form>
          <h2>How would you rate your service with us ?</h2>
          {/* rating select component */}

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
}

export default FeedbackForm
