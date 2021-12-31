import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card"

const FeedbackForm = () => {

    const [text,setText]=useState('')

    const handleText=(e)=>{
        setText(e.target.value);
    }

    return (
    <Card>

<form>
 <h2>How would you rate your service with us ?</h2>
 {/* rating select component */}

<div className="input-group">

    <input onChange={handleText} type="text" placeholder="write a review" 
    
    value={text}
    />
    <Button type="submit">Send</Button>
</div>
</form>

    </Card>);
}

export default FeedbackForm
