import React, { useState } from "react";
import { FcProcess } from "react-icons/fc";

const FeedbackModal = () => {
   const [feedback, setFeedback] = useState("");
   const [feedbackError, setFeedbackError] = useState("");
   const [feedbackProcess, setFeedbackProcess] = useState(false);
   const handleClick = () => {
      setFeedbackProcess(true);
      if (!feedback) {
         setFeedbackError("Please provide your feedback");
      } else {
         setFeedbackError("");
      }
      setFeedbackProcess(false);
   };
   return (
      <div
         className="modal"
         id="my_modal_8"
      >
         <div className="modal-box">
            <h3 className="font-bold text-lg">
               Why you deny in this Class? Write feedback
            </h3>
            <textarea
               placeholder="message"
               value={feedback}
               onChange={(e) => setFeedback(e.target.value)}
               className="py-2 px-3 w-full h-24 mt-5 resize-none outline-none border border-gray-600 focus:placeholder:text-teal-600 focus:border focus:border-teal-600"
            ></textarea>
            {feedbackError && (
               <p className="text-red-500 text-xs text-left">{feedbackError}</p>
            )}
            <div className="modal-action">
               <a
                  href="#"
                  className="btn"
               >
                  Cancel
               </a>
               <button
                  onClick={handleClick}
                  className="py-1 px-3 text-white rounded-md text-xs bg-violet-500 disabled:bg-gray-300 min-w-[100px]"
               >
                  {feedbackProcess ? (
                     <FcProcess className="text-[17px] animate-spin w-fit mx-auto" />
                  ) : (
                     "Deny"
                  )}
               </button>
            </div>
         </div>
      </div>
   );
};

export default FeedbackModal;
