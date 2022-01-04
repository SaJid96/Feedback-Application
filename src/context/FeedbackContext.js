import { createContext, useState ,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);

    const [feedback, setFeedback] = useState([])



    useEffect(()=>{

     fetchFeedback()

    },[])

    // fetch feedback

    const fetchFeedback=  async()=>{
     const response = await fetch(`/feedback?_sort=id&_order=desc`)
      const data=await response.json()
      setFeedback(data)
      setIsLoading(false)
    }



    const [feedbackEdit,setFeedbackEdit] =useState(
      {
        item:{},
        edit:false
      }
    )

    //add feedback

  const addedFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };


  //delete feedback
    const deleteFeedback = async(id) => {
      if (window.confirm('Are you sure yo want to delte?')) {

        await fetch(`/feedback/${id}`,{method: 'DELETE'})
        
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    }


    // edit feedback

const editfeedback=(item)=>{


  setFeedbackEdit({
    item,
    edit:true
  })
}

// update feedback

const  updateFeedback=(id ,updtItem)=>{

 setFeedback(

      feedback.map((item) =>(item.id === id  ? {...item,...updtItem} :item)

 ))
}



  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        feedbackEdit,
        deleteFeedback,
        addedFeedback,
        editfeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;