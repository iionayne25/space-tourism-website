import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="self-end mx-4" onClick={handleToggle}>
            <Image
              src="/shared/icon-close.svg"
              width={19.09}
              height={19.09}
              alt="close icon image"
              loading="lazy"
            />
          </button>
          <div className="flex flex-col gap-4 ">
            <Link href="/">
              <div className="sidebarContainer">
                <p className="numberOfItem">00</p>
                <p className="sidebarItem"> HOME</p>
                {router.pathname == "/" ? (
                  <div className="basis-full flex justify-end items-center ">
                    <p className="w-1 h-8 self-center bg-white"></p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
            <Link href="/destination/moon">
              <div className="sidebarContainer">
                <p className="numberOfItem">01</p>
                <p className="sidebarItem"> DESTINATION</p>
                {router.pathname == "/destination" ? (
                  <div className="basis-full flex justify-end items-center ">
                    <p className="w-1 h-8 self-center bg-white"></p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
            <Link href="/crew/a">
              <div className="sidebarContainer">
                <p className="numberOfItem">02</p>
                <p className="sidebarItem"> CREW</p>
                {router.pathname == "/crew" ? (
                  <div className="basis-full flex justify-end items-center ">
                    <p className="w-1 h-8 self-center bg-white"></p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
            <Link href="/technology/a">
              <div className="sidebarContainer">
                <p className="numberOfItem">03</p>
                <p className="sidebarItem"> TECHNOLOGY</p>
                {router.pathname == "/technology" ? (
                  <div className="basis-full flex justify-end items-center ">
                    <p className="w-1 h-8 self-center bg-white"></p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div onClick={handleToggle}>
          <Image
            src="/shared/icon-hamburger.svg"
            width={24}
            height={21}
            alt="hamburger icon image"
            loading="lazy"
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
