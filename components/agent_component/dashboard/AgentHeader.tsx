type AdminHeader = {
    title: string
}

const AgentHeader = ({title}: AdminHeader) => {
    return (
      <>
        <div className="flex justify-between py-[20px] px-[32px] items-center">
          <div>
            <h1 className="text-[24px] font-medium text-black">{title}</h1>
          </div>
          <div className="flex justify-center items-center gap-[32px]">
            <div className="flex justify-center items-center gap-[12px]">
              <img src="/img/Question.png" className="text-[#727272]" alt="" />
              <p className="text-[#727272] text-[14px] font-medium">
                Help Center
              </p>
            </div>
            <div className="flex justify-center items-center gap-[12px]">
              <img src="/img/agentPic.png" alt="" />
              <h2 className="text-[14px] font-medium text-black">Joseph F.</h2>
              <img src="/img/CaretDown.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#E4E4E4]"></div>
      </>
    );
}
 
export default AgentHeader;