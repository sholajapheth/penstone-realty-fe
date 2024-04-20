"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import SideNav from "@/components/agent_component/dashboard/SideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="relative">
        {!pathname.includes("login") && (
          <>
            <div className="grid grid-cols-12 ">
              <div
                className={` ${open ? "md:col-span-3" : "md:col-span-2"}  ${
                  open ? "lg:col-span-2" : "lg:col-span-1"
                }  bg-[#0B293F] min-h-[100vh] hidden md:block relative`}
              >
                <div className="sticky top-1">
                  <SideNav
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                  />
                </div>
              </div>
              <div
                className={`  col-span-12 ${
                  open ? "md:col-span-9" : "md:col-span-10"
                }  ${
                  open ? "lg:col-span-10" : "lg:col-span-11"
                }   overflow-y-auto min-w-full`}
              >
                {children}
              </div>
            </div>
          </>
        )}
        {pathname.includes("login") && <>{children}</>}
      </div>{" "}
    </>
  );
}
