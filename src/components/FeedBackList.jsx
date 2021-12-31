import { motion,AnimatePresence } from 'framer-motion';

import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types';
 
const FeedBackList = ({ feedback,handleDelete }) => {
  console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback exist</p>;
  }


   return (
     <div className="feedback-list">
       <AnimatePresence>
         {feedback.map((item) => (
           <motion.div
           
           key={item.id}
           initial={{opacity:0}}
           animate={{opacity:1}}
           exit={{opacity:0}}

           >
             <FeedbackItem
               handleDelete={handleDelete}
               key={item.id}
               item={item}
             />
           </motion.div>
         ))}
       </AnimatePresence>
     </div>
   );



  // return (
  //   <div className="feedback-list">

  //       {feedback.map((item)=>(

  //              <FeedbackItem  handleDelete={handleDelete} key={item.id} item={item} />
  //       ))}
     
  //   </div>
  // );
};

FeedBackList.propTypes={

  feedback:PropTypes.arrayOf(
    PropTypes.shape(
    {

    id:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
  })
  )}

export default FeedBackList;
