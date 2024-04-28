import { handleSignInAndStoreData } from "@/app/api/UseLogin";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const GoogleSIgnIn = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // const hasShownModal = localStorage.getItem("modalShown");

    // if (!hasShownModal) {
    setShowModal(true); // Show the modal directly
    const timeoutId = setTimeout(() => setShowModal(false), 8000);

    // Cleanup function to clear timeout on unmount
    return () => clearTimeout(timeoutId);
    // }
  }, []);

  const handleCloseModal = () => {
    handleSignInAndStoreData();

    setShowModal(false);
    // localStorage.setItem("modalShown", "true"); // Set flag in local storage
  };
  const user = Cookies.get("user");

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setProgress(100);
    }, 8 * 1000); // Convert duration to milliseconds

    return () => clearTimeout(timerId);
  }, []);
  return (
    <>
      {!user && showModal && (
        <div
          id="sign-in-suggestion"
          className="flex flex-col gap-4 p-5 cursor-pointer z-[999]"
        >
          <div
            className="flex justify-start items-center w-full"
            onClick={() => setShowModal(false)}
          >
            <IoMdCloseCircleOutline className="w-[25px] h-[25px]" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <span>Sign in with Google for a better experience!</span>
            <button id="sign-in-button" onClick={handleCloseModal}>
              Sign In
            </button>
          </div>
          <div className="flex justify-start w-full">
            <div
              className="imitation-progress-bar rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleSIgnIn;
