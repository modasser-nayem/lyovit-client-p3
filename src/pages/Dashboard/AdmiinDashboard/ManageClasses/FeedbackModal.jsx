import React, { useRef, useState } from "react";
import { FcProcess } from "react-icons/fc";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const FeedbackModal = ({ _id, refetch }) => {
   const [axiosSecure] = useAxiosSecure();
   const refClose = useRef();
   const [feedback, setFeedback] = useState("");
   const [feedbackError, setFeedbackError] = useState("");
   const [feedbackProcess, setFeedbackProcess] = useState(false);
   const handleClick = () => {
      setFeedbackProcess(true);
      if (!feedback) {
         setFeedbackProcess(false);
         setFeedbackError("Please provide your feedback");
      } else {
         setFeedbackError("");
         axiosSecure
            .patch(`class-feedback/${_id}`, { feedback })
            .then((res) => {
               setFeedbackProcess(false);
               if (res.data.success) {
                  refetch();
                  Swal.fire({
                     position: "center",
                     icon: "success",
                     title: res.data.message,
                     showConfirmButton: false,
                     timer: 1500,
                  });
                  refClose.current.click();
                  setFeedback("");
               }
            })
            .catch((error) => {
               setFeedbackProcess(false);
               if (!error.response.data.success) {
                  Swal.fire({
                     position: "center",
                     icon: "warning",
                     title: error.response.data.message,
                     showConfirmButton: false,
                     timer: 1500,
                  });
               }
            });
      }
   };
   return (
      <div
         className="modal"
         id="my_modal_8"
      >
         <div className="modal-box">
            <h3 className="font-bold text-lg">Write Your Feedback</h3>
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
                  ref={refClose}
                  href="#"
                  className="btn"
               >
                  Cancel
               </a>
               {feedbackProcess ? (
                  <FcProcess className="text-2xl animate-spin w-fit my-2 mx-5" />
               ) : (
                  <button
                     onClick={handleClick}
                     className="py-1 px-3 text-white rounded-md text-xs bg-violet-500 disabled:bg-gray-300 min-w-[100px]"
                  >
                     Deny
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};

export default FeedbackModal;
