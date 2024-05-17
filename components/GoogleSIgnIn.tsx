import { handleSignInAndStoreData } from "@/app/api/UseLogin";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const GoogleSIgnIn = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
    const timeoutId = setTimeout(() => setShowModal(false), 8000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleCloseModal = () => {
    handleSignInAndStoreData();

    setShowModal(false);
  };
  const user = Cookies.get("userUser");

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
