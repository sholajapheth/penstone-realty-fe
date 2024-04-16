const ApplicationForm = () => {
  return (
    <>
        <div className="bg-white flex  justify-center">
      <div className="w-[85%] lg:w-[85%]">
        <div className="bg-white flex justify-start flex-col py-[2em] lg:py-[4em] text-secondary w-full">
          <div className="flex flex-col items-start gap-[24px] w-full">
            <h1 className="text-[36px] font-semibold">Residential</h1>
            <div className="w-full h-[1px] bg-secondary"></div>
            <p className="text-[24px] font-medium">Single Applicant Form</p>
          </div>

          <form className="text-[16px] py-[58px] flex flex-col gap-[20px]">
            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Select a Property{" "}
                <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <select
                required
                className="border-[2px] outline-none rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              >
                <option value="" disabled>
                  Ask a question / get help
                </option>
                <option value="">Select a property</option>
              </select>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Intended use of property{" "}
                <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <select
                required
                className="border-[2px] outline-none rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              >
                <option value="" disabled>
                  Ask a question / get help
                </option>
                <option value="">Select a property</option>
              </select>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">Requested Move in Date:</label>
              <input
                type="date"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-[200px]"
              />
            </div>
          </form>

          <div className="flex flex-col items-start gap-[24px] w-full">
            <p className="text-[24px] font-medium">Contact Information</p>
            <div className="w-full h-[1px] bg-secondary"></div>
          </div>
          <form className="text-[16px] py-[58px] flex flex-col gap-[20px]">
            <div className="flex justify-between items-center gap-[20px] lg:gap-[50px]">
              <div className="flex flex-col items-start gap-2 w-[50%]">
                <label className="font-medium">
                  First Name <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                />
              </div>
              <div className="flex flex-col items-start gap-2 w-[50%]">
                <label className="font-medium">
                  Last Name <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Phone Number <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="tel"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Email <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="email"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Address <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>
          </form>

          <div className="flex flex-col items-start gap-[24px] w-full">
            <p className="text-[24px] font-medium">Personal Information</p>
            <div className="w-full h-[1px] bg-secondary"></div>
          </div>
          <form className="text-[16px] pt-[58px] pb-[20px] flex flex-col gap-[20px]">
            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">Date of Birth:</label>
              <input
                type="date"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-[200px]"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Monthly Rent Budget{" "}
                <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Employer Name <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Employer Address <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Length of Employment{" "}
                <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Annual Income <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Emergency Contact Name:{" "}
                <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Emergency Contact Address:{" "}
                <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                How many people will be living in the home?
                <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-medium">
                Address <span className="text-[14px]">(Required)</span>{" "}
              </label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
              />
            </div>
          </form>

          <div className="flex flex-col items-start gap-[18px] pb-[2em]">
            <p className="font-medium">
              I warrant this application and the contents to be true, accurate,
              and complete. By clicking SUBMIT, I confirm that I have been made
              aware of the RESIDENT SELECTION CRITERIA, and authorize United
              Property Group and the credit reporting/screening agencies to
              investigate my character, verify my credit, and verify the
              accuracy of all information recorded above. I understand that any
              false statements, misrepresentations, inaccurate information, or
              failure to supply the data requested, will be grounds for
              disapproval of my application. I understand that the application
              fee I submit with my application is non-refundable.
            </p>
            <div className="flex justify-start items-center gap-[10px]">
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">Yes</label>
            </div>
            <p className="font-medium">
              PLEASE NOTE, BY CLICKING SUBMIT YOU AGREE AND ACKNOWLEDGE THAT THE
              INFORMATION YOU&apos;VE SUPPLIED WILL BE USED TO CONDUCT A BACKGROUND
              INVESTIGATION, INCLUDING CREDIT, CRIMINAL, AND EVICTION CHECKS
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
              <button className="bg-primary text-white font-semibold py-3 rounded-xl px-8 w-full lg:w-[20%]">
                Submit
              </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ApplicationForm;
