import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
   const { user } = useAuth();
   const { photoURL, displayName, email, metadata, role } = user;
   const { creationTime, lastSignInTime } = metadata;
   return (
      <div className="py-24">
         <img
            className="w-52 h-52 rounded-full mx-auto"
            src={photoURL}
            alt=""
         />
         <div className="w-fit mx-auto p-5 text-xl font-Lato">
            <p className="text-3xl text-center font-semibold font-Montserrat">
               {displayName}{" "}
               <span className="text-2xl text-teal-600">({role})</span>
            </p>
            <p className="py-2 mt-2">
               <span className="font-semibold">Email :</span> {email}
            </p>
            <p>
               <span className="font-semibold">Create Account :</span>{" "}
               {creationTime.slice(0, 26)}
            </p>
            <p className="py-2">
               <span className="font-semibold">Last Login at :</span>{" "}
               {lastSignInTime.slice(0, 26)}
            </p>
            {/* <div className="w-fit mx-auto mt-8">
               <Link
                  to="/update-profile"
                  className="cs-btn block w-fit"
               >
                  Edit Profile
               </Link>
            </div> */}
         </div>
      </div>
   );
};

export default Profile;
