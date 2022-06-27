import React from 'react'
import Feedbackitem from './Feedbackitem'
import { useContext } from 'react';
// import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>
  }

  // return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //       {feedback.map((item) => (
  //         <motion.div key={item.id}
  //           initial={{ opacity: 0 }}>
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           <Feedbackitem key={item.id} item={item} handleDelete={handleDelete} />
  //         </motion.div>
  //       ))}
  //     </AnimatePresence>
  //   </div>
  // )
  return isLoading ? <Spinner /> :
    (<div className="feedback-list">
      {feedback.map((item) => (
        <Feedbackitem key={item.id} item={item} />
      ))}
    </div>
    )
}



export default FeedbackList