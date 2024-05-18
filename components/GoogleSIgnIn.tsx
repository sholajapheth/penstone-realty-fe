import { handleSignInAndStoreData } from "@/app/api/UseLogin";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const GoogleSIgnIn = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
    const timeoutId = setTimeout(() => 
      setShowModal(false)
    , 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleCloseModal = () => {
    handleSignInAndStoreData();

    setShowModal(false);
  };
  const user = Cookies.get("userJwtToken");

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setProgress(100);
    }, 8 * 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      {!user && showModal && (
        // <div
        //   id="sign-in-suggestion"
        //   className="flex flex-col gap-4 p-5 cursor-pointer z-[999]"
        // >
        //   <div
        //     className="flex justify-start items-center w-full"
        //     onClick={() => setShowModal(false)}
        //   >
        //     <IoMdCloseCircleOutline className="w-[25px] h-[25px]" />
        //   </div>
        //   <div className="flex flex-col items-start gap-2">
        //     <span>Sign in with Google for a better experience!</span>
        //     <button id="sign-in-button" className="bg-primary" onClick={handleCloseModal}>
        //       Sign In
        //     </button>
        //   </div>
        //   {/* <div className="flex justify-start w-full">
        //     <div
        //       className="imitation-progress-bar rounded-full"
        //       style={{ width: `${progress}%` }}
        //     ></div>
        //   </div> */}
        // </div>

        <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Sign in with Google</h2>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 mb-4">Sign in to your account</p>
            <button
              onClick={handleCloseModal}
              className="w-full flex items-center justify-center bg-secondary text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.36 1.18 8.29 3.52l6.17-6.16C34.68 3.45 29.76 1 24 1 14.82 1 7.04 7.45 3.86 16.09l7.59 5.84C13.27 15.1 18.24 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.5 24c0-1.51-.14-2.97-.41-4.36H24v8.26h12.93c-.56 2.9-2.15 5.36-4.58 7.01l7.59 5.85C43.76 37.96 46.5 31.44 46.5 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.45 28.33c-.65-1.9-1.02-3.92-1.02-6.01s.37-4.11 1.02-6.01L3.86 16.1C1.79 19.83 0.5 23.81 0.5 28s1.29 8.17 3.36 11.9l7.59-5.85z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c6.48 0 11.88-2.15 15.85-5.84l-7.59-5.85c-2.13 1.47-4.84 2.34-8.26 2.34-5.74 0-10.69-4.57-12.39-10.71l-7.59 5.85C7.04 40.55 14.82 46 24 46z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleSIgnIn;
