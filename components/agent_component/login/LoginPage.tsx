const LoginPage = () => {
    return (
      <>
        <div className="flex justify-between w-full">
          <div className="w-[50%] bg-[url('/img/agentBg.png')] bg-secondary bg-no-repeat flex justify-center items-center flex-col py-[60px] gap-[50px]">
            <div>
              <h2 className="text-center pb-[12px] text-[32px] font-medium text-white">
                Start closing more revenue <br /> with Venture
              </h2>
              <p className="text-[14px] text-white text-center">
                Join Venture now to expand your revenue for future!
              </p>
            </div>
            <div>
              <img src="/img/homeCard.png" alt="" />
            </div>
            <div>
              <img src="/img/Companies.png" alt="" />
            </div>
          </div>
          <div className="w-[50%] flex items-center flex-col pt-[90px] px-[120px] text-secondary">
            <img src="/logo.png" alt="" />
            <div className="text-center py-[36px]">
              <h2 className="text-[32px] font-medium pb-[8px]">
                Welcome back!
              </h2>
              <p className="text-[#414141] text-[16px]">
                Please Login to Continue
              </p>
            </div>

            <form action="" className="w-full flex flex-col gap-[16px]">
              <div className="flex flex-col items-start gap-2">
                <label className="text-[14px] text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="border-[2px] border-[#AFAFAF] rounded-[4px] h-[40px] px-[16px] w-full"
                  placeholder="Enter your email here"
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="text-[14px] text-secondary">Password</label>
                <input
                  type="password"
                  required
                  className="border-[2px] border-[#AFAFAF] rounded-[4px] h-[40px] px-[16px] w-full"
                  placeholder="Enter your password here"
                />
              </div>

              <div className="flex items-center justify-between gap-3 mt-2">
                <div className="flex items-center justify-start gap-3">
                  <input type="checkbox" required className="" />
                  <label className="text-[14px] text-[#AFAFAF]">
                    Remember Me
                  </label>
                </div>
                <div>
                  <p className="text-secondary font-semibold text-[14px]">
                    Forgot Password?
                  </p>
                </div>
              </div>
              <button className="bg-primary text-white font-semibold py-3 rounded-[4px]">
                Sign In
              </button>
              <button className="border-secondary border-[1px] text-secondary font-semibold py-3 rounded-[4px] flex items-center justify-center gap-3">
                <img src="/img/google.png" alt="" />
                Sign In with Google
              </button>

              <p className="text-[14px] text-[#727272] text-center">
                Don&apos;t have an account?{" "}
                <a href="" className="text-secondary font-semibold">
                  Sign Up
                </a>
              </p>
            </form>

            <div className="pt-[120px] text-[#414141] text-center text-[14px]">
              <p>©2023 Pentstone. All rights reserved</p>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default LoginPage;